"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { CartRemoveProductItemDocument, CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number, price: number) => {
	const newTotal = Number(((price * 10 * (quantity * 10)) / (10 * 10)).toFixed(2));
	const resp = await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			id: itemId.toString(),
			quantity: quantity,
			total: newTotal,
		},
	});
	revalidateTag("cart");
	return resp.updateOrderItem?.data;
};
export const removeProductItem = async (itemId: number) => {
	const resp = await executeGraphql({
		query: CartRemoveProductItemDocument,
		variables: {
			id: itemId.toString(),
		},
	});
	revalidateTag("cart");
	return resp.deleteOrderItem?.data?.id;
};
