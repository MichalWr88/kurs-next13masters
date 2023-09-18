import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "@/UI/Rating/Rating";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";
import { getProductsList } from "@/providers/restApiProvider/restApiProvider";
export const generateStaticParams = async () => [
	{ pageTakeNumber: "1" },
	{ pageTakeNumber: "2" },
	{ pageTakeNumber: "3" },
];

const ProductPage = async ({
	params: { pageTakeNumber },
}: {
	params: { pageTakeNumber: string };
}) => {
	const resp = await executeGraphql(ProductsGetListDocument, {
		page: Number(pageTakeNumber),
		pageSize: 20,
	});

	console.log(resp.products);
	return (
		<section className="body-font text-gray-600">
			<header>
				<h1 className="container bg-brand-bg-color p-2 text-xl uppercase">Products list</h1>
			</header>
			<div className="container mx-auto px-5 py-24">
				<ul data-testid="products-list" className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-4 sm:grid-cols-3">
					{resp.products?.data.map((item) => {
						if (!item.attributes) return null;
						const { slug, title, description, price, categories, rating, images } = item.attributes;

						return (
							<li key={`product-${slug}`} className="">
								<figure className="">
									{images?.data[0] && (
										<Link
											className="relative block h-56 w-full items-center justify-center overflow-hidden rounded-3xl"
											href={`/product/${slug}`}
										>
											<Image
												className="relative transition-all delay-100 duration-300 ease-in-out  "
												quality={20}
												priority
												data-testid="mePic"
												src={`${process.env.GRAPHQL_URL}${images?.data[0].attributes?.url}` || ""}
												alt={title}
												// width={images?.data[0].attributes?.width ?? 200}
												// height={images?.data[0].attributes?.height ?? 200}
												fill
												style={{ objectFit: "fill" }}
											/>
										</Link>
									)}
									<figcaption className="mt-4">
										{categories &&
											categories.data?.map((cat) => (
												<h3
													key={`categories-${cat.attributes?.slug}`}
													className="title-font mb-1 text-xs tracking-widest text-gray-500"
												>
													{cat.attributes?.name}
												</h3>
											))}

										<h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
										<div className="flex justify-between">
											<Rating rating={rating}/>
											<p className="mt-1">$ {price}</p>
										</div>
									</figcaption>
								</figure>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default ProductPage;
