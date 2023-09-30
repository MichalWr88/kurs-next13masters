import crypto from "crypto";
import {
	CartCreateDocument,
	CartItemCreateDocument,
	type CartDataFragment,
	type TypedDocumentString,
	CartGetBySlugDocument,
	type OrderDataFragment,
} from "@/gql/graphql";
type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}
	if (!process.env.GRAPHQL_TOKEN) {
		throw TypeError("GRAPHQL_TOKEN is not defined");
	}

	const res = await fetch(`${process.env.GRAPHQL_URL}/graphql`, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			"Authorization":`Bearer ${process.env.GRAPHQL_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors)
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
