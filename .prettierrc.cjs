/** @type {import('prettier').Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	$schema: "http://json.schemastore.org/prettierrc",
	useTabs: true,
	endOfLine: "auto",
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
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
