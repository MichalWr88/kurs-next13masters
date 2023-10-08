import crypto from "crypto";
import {
	CartCreateDocument,
	CartItemCreateDocument,
	type CartDataFragment,
	type TypedDocumentString,
	CartGetBySlugDocument,
	type OrderDataFragment,
	CategoriesGetListDocument,
	CartItemCheckIsInCartDocument,
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
			Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors);
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const createCart = async (): Promise<CartDataFragment> => {
	const resp = await executeGraphql({
		query: CartCreateDocument,
		variables: { slug: crypto.randomUUID() },
	});

	if (!resp.createOrder || !resp.createOrder.data) {
		throw new Error("Failed to create cart");
	}

	return resp.createOrder.data;
};
export const getCartBySlug = async (cartId?: string): Promise<OrderDataFragment | null> => {
	if (!cartId) {
		return null;
	}
	const resp = await executeGraphql({
		query: CartGetBySlugDocument,
		variables: {
			slug: cartId,
		},
		cache: "no-store",
	});

	if (!resp.orders?.data || !resp.orders?.data[0]) {
		throw new Error("Failed to create cart");
	}

	return resp.orders.data[0];
};
export const createCartItem = async (orderId: number, productId: number, total: number) => {
	const resp = await executeGraphql({
		query: CartItemCreateDocument,
		variables: {
			orderId: orderId.toString(),
			productId: productId.toString(),
			total,
		},
	});

	if (!resp.createOrderItem || !resp.createOrderItem.data || !resp.createOrderItem.data.attributes) {
		throw new Error("Failed to create cart");
	}

	return resp.createOrderItem.data;
};
export const checkIsOrderItemInCart = async (productId: number, cartId: number) => {
	const resp = await executeGraphql({
		query: CartItemCheckIsInCartDocument,
		variables: {
			cartId: cartId.toString(),
			productId: productId.toString(),
		},
	});

	return resp.orderItems?.data[0] ?? null;
};

export const getCategoriesList = async () => {
	const resp = await executeGraphql({ query: CategoriesGetListDocument });
	const categories = resp.categories?.data;
	return categories ?? [];
};
