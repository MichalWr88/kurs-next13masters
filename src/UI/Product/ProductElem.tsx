import React from "react";
import { type ProductDataWithCategoriesFragment } from "@/gql/graphql";
import Rating from "../Rating/Rating";

import AppLink from "../Shared/AppLink";
import ProductImg from "./ProductImg";

type Props = {
	product: ProductDataWithCategoriesFragment;
};

const ProductElem = ({ product }: Props) => {
	const { slug, title, price, categories, rating, images } = product;
	return (
		<figure>
			{images?.data[0] && <ProductImg product={product} />}
			<figcaption className="mt-4">
				<div className="flex gap-2">
					{categories &&
						categories.data?.map((cat) => (
							<h3
								key={`categories-${cat.attributes?.slug}`}
								className="title-font mb-1 text-xs tracking-widest text-gray-500"
							>
								<AppLink route={`/categories/${cat.attributes?.slug}`}>{cat.attributes?.name}</AppLink>
							</h3>
						))}
				</div>
				<h2 className="title-font text-lg font-medium text-gray-900">
					<AppLink route={`/products/${slug}`}>{title}</AppLink>
				</h2>
				<div className="flex justify-between">
					<Rating rating={rating ?? 0} />
					<p className="mt-1 font-bold">$ {price}</p>
				</div>
			</figcaption>
		</figure>
	);
};

export default ProductElem;
