import { type HttpRequest } from "@azure/functions";
import { z } from "zod";

export function getValuesFromRequestQuery<T extends z.ZodTypeAny>(
	request: HttpRequest,
	querySchema: T
): z.SafeParseReturnType<z.ZodError, z.infer<typeof querySchema>> {
	const values = valuesFromSearchParams(request.query);
	return querySchema.safeParse(values);
}

function valuesFromSearchParams(requestQuery: URLSearchParams) {
	return Array.from(requestQuery.keys()).reduce((values, key) => {
		const value = requestQuery.getAll(key);
		values[key] = Array.isArray(value) ? value[0] : value;
		return values;
	}, {} as Record<string, string>);
}
