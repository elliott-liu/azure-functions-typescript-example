import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";
import autoExternal from "rollup-plugin-auto-external";

export default {
	input: ["src/functions/*.ts"],
	output: {
		format: "cjs",
		dir: "dist",
		preserveModules: true,
		preserveModulesRoot: "src",
	},
	plugins: [
		typescript({}),
		multi({ exports: false, preserveModules: true }),
		autoExternal({}),
	],
};
