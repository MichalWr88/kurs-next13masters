import { cookies } from "next/headers";
import React from "react";
import IncrementProductQuantity from "@/UI/Buttons/IncrementProductQuantity";
import { getCartBySlug } from "@/api/graphQL/graphQLProvider";

const CartPage = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) return <div>Cart is empty</div>;
	const cart = await getCartBySlug(cartId);

	return (
		<table>
			<thead>
				<tr>
					<th className="min-w-[200px] border ">Product</th>
					<th className="min-w-[200px] border">Price</th>
					<th className="min-w-[200px] border">Quantity</th>
					<th className="min-w-[200px] border">Total</th>
				</tr>
			</thead>
			<tbody>
				{cart?.attributes?.order_items?.data?.map((item) => {
					if (!item.id) return null;

					return (
						<tr key={item.id}>
							<td className="border text-center">{item.attributes?.product?.data?.attributes?.title}</td>
							<td className="border text-center">${item.attributes?.product?.data?.attributes?.price?.toString()}</td>
							<td className="border text-center">
								<IncrementProductQuantity
									quantity={item.attributes?.quantity || 0}
									itemId={item.id}
									price={item.attributes?.product?.data?.attributes?.price || 0}
								/>
							</td>
							<td className="border text-center">{item.attributes?.total}</td>
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				<tr>
					<th className="min-w-[200px] border "></th>
					<th className="min-w-[200px] border"></th>
					<th className="min-w-[200px] bg-zinc-200 text-right">Cart total:</th>
					<th className="min-w-[200px]  bg-zinc-200">${cart?.attributes?.total}</th>
				</tr>
			</tfoot>
		</table>
	);
};

export default CartPage;
