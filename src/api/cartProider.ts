import { cookies } from "next/headers";

import { createCart, getCartBySlug } from "./graphQL/graphQLProvider";

export const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartBySlug(cartId);

		if (cart) {
			return cart;
		}
	}

	const newCart = await createCart();
	if (!newCart.attributes) {
		throw new Error("Failed to set cookie for cart");
	}
	cookies().set("cartId", newCart.attributes.slug);
	return newCart;
};
