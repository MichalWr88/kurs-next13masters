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
				fragmentMasking: false //{unmaskFunctionName:"getFragmentData"},
			},
			config: {
			
				useTypeImports: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				scalars:{
					DateTime: 'string',
				},
				skipTypename: true,
				documentMode: "string",
				avoidOptionals: {
					field: true,
					inputValue: false,
					object: false,
					defaultValue: true,
				},
        arrayInputCoercion: false,
        preResolveTypes: false,
			},
		},
	},
};
 
// eslint-disable-next-line import/no-default-export
export default config;