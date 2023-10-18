import { cookies } from "next/headers";
import React from "react";
import ItemProductQuantity from "@/UI/Buttons/ItemProductQuantity";
import RemoveCartItem from "@/UI/Buttons/RemoveCartItem";
import { getCartBySlug } from "@/api/graphQL/graphQLProvider";

const CartPage = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) return <div>Cart is empty</div>;
	const cart = await getCartBySlug(cartId);

	return (
		<div className="flex flex-col">
			<table className="my-6">
				<thead className="bg-brand-color-4">
					<tr>
						<th className="w-9 overflow-auto border">Product</th>
						<th className="w-9 overflow-auto border">Price</th>
						<th className="w-9 overflow-auto border">Quantity</th>
						<th className="w-9 overflow-auto border">Total</th>
					</tr>
				</thead>
				<tbody>
					{cart?.attributes?.order_items?.data?.map((item) => {
						if (!item.id) return null;

						return (
							<tr key={item.id} className="h-14">
								<td className="border text-center">{item.attributes?.product?.data?.attributes?.title}</td>
								<td className="border text-center">
									<span className="px-1">$</span>
									{item.attributes?.product?.data?.attributes?.price?.toString()}
								</td>
								<td className="border text-center">
									<ItemProductQuantity
										quantity={item.attributes?.quantity || 0}
										itemId={item.id}
										price={item.attributes?.product?.data?.attributes?.price || 0}
									/>
								</td>
								<td className=" border  text-center">
									<div className="flex justify-between px-5">
										<div>
											<span className="pr-1">$</span>

											{item.attributes?.total}
										</div>
										<RemoveCartItem itemId={item.id} />
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<th className="min-w-[200px] border "></th>
						<th className="min-w-[200px] border"></th>
						<th className="min-w-[200px] bg-zinc-200 text-right">Cart total:</th>
						<th className="min-w-[200px]  bg-zinc-200 px-4 text-left">
							<span className="px-1">$</span>
							{cart?.attributes?.order_items?.data
								.map((e) => e.attributes?.total ?? 0)
								.reduce((acc, curr) => acc + curr, 0)
								.toFixed(2)}
						</th>
					</tr>
				</tfoot>
			</table>
			<button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
				Buy
			</button>
		</div>
	);
};

export default CartPage;
