import Image from "next/image";
import React from "react";
import { type ProductDataFragment } from "@/gql/graphql";

type Props = {
	product?: ProductDataFragment | null;
	fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

const ProductImg = ({ product, fit }: Props) => {
	if (!product) return null;
	const { title, images } = product;
	return (
		<>
			{images?.data[0] && (
				<Image
					className="relative h-max transition-all delay-100 duration-300 ease-in-out "
					quality={20}
					placeholder="blur" // "empty" | "blur"
					blurDataURL="/blur.png"
					data-testid="mePic"
					src={`${process.env.GRAPHQL_URL}${images?.data[0].attributes?.url}` || ""}
					alt={title}
					width={images?.data[0].attributes?.width ?? 200}
					height={images?.data[0].attributes?.height ?? 200}
					style={{ objectFit: fit }}
				/>
			)}
		</>
	);
};

export default ProductImg;
