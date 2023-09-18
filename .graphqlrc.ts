import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";
 
loadEnvConfig(process.cwd());
 
const config: CodegenConfig = {
	schema:`${process.env.GRAPHQL_URL}/graphql`,
	overwrite: true,
	ignoreNoDocuments: true,
	documents: "src/graphql/*.graphql",
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				useTypeImports: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				skipTypename: true,
				documentMode: "string",

        avoidOptionals: true,
        arrayInputCoercion: false,
        preResolveTypes: false,
			},
		},
	},
};
 
// eslint-disable-next-line import/no-default-export
export default config;