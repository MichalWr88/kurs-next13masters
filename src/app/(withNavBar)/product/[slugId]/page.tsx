/* eslint-disable @typescript-eslint/no-misused-promises */

import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import AddCartButton from "@/UI/Buttons/AddCartButton";
import ProductImg from "@/UI/Product/ProductImg";
import { getOrCreateCart } from "@/api/cartProider";
import { createCartItem, executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductGetBySlugDocument } from "@/gql/graphql";

export const generateMetadata = async ({ params: { slugId } }: { params: { slugId: string } }) => {
	const resp = await executeGraphql({
		query: ProductGetBySlugDocument,
		variables: { slug: slugId },
	});
	return {
		title: resp.products?.data[0]?.attributes?.title,
		description: resp.products?.data[0]?.attributes?.description,
	};
};

const PageProduct = async ({ params: { slugId } }: { params: { slugId: string } }) => {
	const resp = await executeGraphql({
		query: ProductGetBySlugDocument,
		variables: { slug: slugId },
	});
	const product = resp.products?.data[0]?.attributes;
	const id = resp.products?.data[0]?.id;
	if (!product || !id) return notFound();

	async function addProductToCartAction() {
		"use server";

		const cart = await getOrCreateCart();
		if (!cart.attributes?.slug || !cart.id) return;
		cookies().set("cartId", cart.attributes?.slug, {
			httpOnly: true,
			sameSite: "lax",
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
		});

		await createCartItem(Number(cart.id), Number(id), product?.price || 0);
	}

	return (
		<section className="min-h-screen">
			<div className="container mx-auto px-5 py-24">
				<div className="grid grid-cols-2 gap-5">
					<ProductImg product={product} />
					<div className="">
						<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product.title}</h1>
						{product.categories?.data.map((cat) => (
							<h2
								key={`cat-${cat.attributes?.slug}`}
								className="title-font text-sm tracking-widest text-gray-500"
							>
								{cat.attributes?.name}
							</h2>
						))}

						<div className="mb-4 flex"></div>
						<p className="leading-relaxed">{product.description}</p>
						<div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
							<div className="flex">
								<span className="mr-3">Color</span>
								<button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
								<button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
							</div>
							<div className="ml-6 flex items-center">
								<span className="mr-3">Size</span>
								<div className="relative">
									<select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
										<option>SM</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
									</select>
									<span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4"
											viewBox="0 0 24 24"
										>
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>

						<form className="flex" action={addProductToCartAction}>
							<span className="title-font text-2xl font-medium text-gray-900">$58.00</span>
							<AddCartButton />

							{/* <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button> */}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageProduct;
