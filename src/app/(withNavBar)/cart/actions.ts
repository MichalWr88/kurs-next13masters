"use server";

import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number, price: number) => {
	const newTotal = Number(((price * 10 * (quantity * 10)) / (10 * 10)).toFixed(2));
	const resp = await executeGraphql({query:CartSetProductQuantityDocument, variables: {
		id: itemId.toString(),
		quantity: quantity,
		total: newTotal,
	}});

	return resp.updateOrderItem?.data;
};
