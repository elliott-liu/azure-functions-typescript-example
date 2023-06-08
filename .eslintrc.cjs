/**
 * @type {import("eslint").Linter.Config}
 */

module.exports = {
	env: {
		es2022: true,
	},
	overrides: [
		{
			files: ["**/*.cjs"],
			env: {
				node: true,
			},
		},
	],
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	rules: {
		"no-console": 1, // Means warningt
		"prettier/prettier": 2, // Means error
	},
};
