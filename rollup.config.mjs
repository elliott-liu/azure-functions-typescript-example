import alias from "@rollup/plugin-alias";
import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";

export default {
	input: ["src/functions/*.ts"],
	output: {
		format: "cjs",
		dir: "dist",
		preserveModules: true,
		preserveModulesRoot: "src",
	},
	external: ["@azure/functions", "zod", "zod-validation-error"],
	plugins: [
		alias({
			// entries: [{ find: "@", replacement: "dist" }],
		}),
		typescript({}),
		multi({ exports: false, preserveModules: true }),
	],
};
