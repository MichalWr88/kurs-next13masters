import { cookies } from "next/headers";
import { getCartBySlug } from "@/api/graphQL/graphQLProvider";
import AppLink from "../Shared/AppLink";

const CartCount = async () => {
	const cartId = cookies().get("cartId")?.value;

	const cart = await getCartBySlug(cartId);
	const quantity = cart?.attributes?.order_items?.data.length ?? 0;

	return (
		<AppLink route="/cart">
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					width="25"
					height="25"
					viewBox="0 0 24 24"
				>
					<path d="M19.413 19H10.01a2.498 2.498 0 0 1-2.401-1.816L4.43 6.088A1.497 1.497 0 0 0 2.99 5H.5a.5.5 0 0 1 0-1h2.49c1.115 0 2.103.747 2.401 1.816L6.018 8h16.481c.479 0 .918.22 1.203.604.286.384.371.868.233 1.326l-2.151 7.35A2.496 2.496 0 0 1 19.413 19zM6.304 9l2.267 7.912c.179.642.77 1.088 1.439 1.088h9.403a1.51 1.51 0 0 0 1.416-1.018l2.149-7.338a.496.496 0 0 0-.078-.442.492.492 0 0 0-.401-.202H6.304zM11 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2zM18 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2z" />
				</svg>
				<span className="px-1">{quantity}</span>
			</div>
		</AppLink>
	);
};

export default CartCount;
