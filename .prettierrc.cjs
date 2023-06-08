/** @type {import('prettier').Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	$schema: "http://json.schemastore.org/prettierrc",
	useTabs: true,
	endOfLine: "auto",
	importOrder: [
		"<BUILTIN_MODULES>",
		"<THIRD_PARTY_MODULES>",
		"^[.]", // relative imports
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	plugins: [
		"prettier-plugin-packagejson",
		"@ianvs/prettier-plugin-sort-imports",
	],
	overrides: [
		{ files: ".*rc", options: { parser: "json" } },
		{ files: ".nvmrc", options: { parser: "yaml" } },
		{ files: ".funcignore", options: { parser: "yaml" } },
	],
};
