import Image from "next/image";
import React from "react";
import { type Product } from "@/models/products";
import ProductLink from "./ProductLink";
import { ProductDataFragment } from "@/gql/graphql";
type Props = {
	product?: ProductDataFragment | null;
	fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

const ProductImg = ({ product, fit }: Props) => {
	if (!product) return null;
	const { title, slug, images } = product;
	return (
		<ProductLink id={slug}>
			{images?.data[0] && (
				<Image
					className="relative h-max transition-all delay-100 duration-300 ease-in-out "
					quality={20}
					priority
					data-testid="mePic"
					src={`${process.env.GRAPHQL_URL}${images?.data[0].attributes?.url}` || ""}
					alt={title}
					width={images?.data[0].attributes?.width ?? 200}
					height={images?.data[0].attributes?.height ?? 200}
					style={{ objectFit: fit }}
				/>
			)}
		</ProductLink>
	);
};

export default ProductImg;
