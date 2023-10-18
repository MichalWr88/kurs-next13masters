import React from "react";
import { type ProductDataWithCategoriesFragment } from "@/gql/graphql";
import Rating from "../Rating/Rating";

import AppLink from "../Shared/AppLink";
import ProductImg from "./ProductImg";

type Props = {
	product: ProductDataWithCategoriesFragment;
	priceTestId?: string;
	ratingTestId?: string;
};

const ProductElem = ({ product, priceTestId, ratingTestId }: Props) => {
	const { slug, title, price, categories, rating, images } = product;
	return (
		<AppLink route={`/product/${slug}`}>
			{images?.data?.[0] && <ProductImg product={product} />}
			<figcaption className="mt-4 w-full px-5">
				<div className="flex gap-2">
					{categories?.data?.map((cat) => (
						<p
							key={`categories-${cat.attributes?.slug}`}
							className="mb-1 text-xs tracking-widest text-gray-500"
						>
							{cat.attributes?.name}
						</p>
					))}
				</div>
				<h2 className="text-lg font-medium text-gray-900">{title}</h2>
				<div className="flex justify-between">
					<Rating rating={rating ?? 0} ratingTestId={ratingTestId}/>
					<p className="mt-1 font-bold text-brand-font-color text-xl" >
						$ <b data-testid={priceTestId}>{price}</b>
					</p>
				</div>
			</figcaption>
		</AppLink>
	);
};

export default ProductElem;
