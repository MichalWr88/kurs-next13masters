"use server";

import { revalidatePath } from "next/cache";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number, price: number) => {
	const newTotal = Number(((price * 10 * (quantity * 10)) / (10 * 10)).toFixed(2));
	const resp = await executeGraphql({query:CartSetProductQuantityDocument, variables: {
		id: itemId.toString(),
		quantity: quantity,
		total: newTotal,
	}});
	// revalidatePath("/cart");
	return resp.updateOrderItem?.data;
};
