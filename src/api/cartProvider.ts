import { cookies } from "next/headers";

import { createCart, getCartBySlug } from "./graphQL/graphQLProvider";

export const getOrCreateCart = async () => {
	const cookieStore = await cookies();
	const cartId = cookieStore.get("cartId")?.value;
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
	cookieStore.set("cartId", newCart.attributes.slug);
	return newCart;
};
