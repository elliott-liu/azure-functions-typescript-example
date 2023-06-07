import {
	app,
	HttpRequest,
	HttpResponseInit,
	InvocationContext,
} from "@azure/functions";
import { z, ZodError, type ZodSchema } from "zod";
import { fromZodError } from "zod-validation-error";

const requestSchema = z.string().array().min(1);

const requestQuerySchema = z.object({
	name: requestSchema.max(1).pipe(z.coerce.string()),
	many: requestSchema.optional(),
	string: requestSchema.max(1).pipe(z.coerce.string()).optional(),
	posNumber: requestSchema.max(1).pipe(z.coerce.number().positive()).optional(),
	range: requestSchema.max(1).pipe(z.coerce.number().min(0).max(5)).optional(),
	plainDate: requestSchema
		.max(1)
		.pipe(
			z.coerce.string().refine(
				(v) => /\d{4}-\d{2}-\d{2}/.test(v),
				(val) => ({ message: `Invalid plain date: ${val}` })
			)
		)
		.optional(),
});

export async function HttpTrigger(
	request: HttpRequest,
	context: InvocationContext
): Promise<HttpResponseInit> {
	context.log(`Http function processed request for url "${request.url}"`);

	// Defined in local.settings.json
	// TODO add type safety to environment variables
	const ENVIRONMENT_VARIABLE = process.env.EXAMPLE_1;

	const rawBody = await request.text();

	const parsedRequest = getValuesFromRequestQuery(request, requestQuerySchema);

	if (!parsedRequest.success) {
		return { body: fromZodError(parsedRequest.error).message, status: 400 };
	} else {
		context.log(parsedRequest.data);
	}

	if (rawBody) {
		context.log("Raw body contents: ", rawBody);
	}

	const name = parsedRequest.data.name || ENVIRONMENT_VARIABLE || "world";

	return { body: `Hello, ${name}!`, status: 200 };
}

app.http("HttpTrigger", {
	methods: ["POST"],
	route: "hello",
	authLevel: "anonymous",
	handler: HttpTrigger,
});

function getValuesFromRequestQuery(
	request: HttpRequest,
	schema: ZodSchema
):
	| { success: true; data: z.infer<typeof requestQuerySchema> }
	| { success: false; error: ZodError } {
	const values = valuesFromSearchParams(request.query);
	return schema.safeParse(values);
}

function valuesFromSearchParams(requestQuery: URLSearchParams) {
	return Array.from(requestQuery.keys()).reduce(
		(values, key) => ({
			...values,
			[key]: requestQuery.getAll(key),
		}),
		{} as Record<string, Array<string> | string>
	);
}
