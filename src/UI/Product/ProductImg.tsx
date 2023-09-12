import Image from "next/image";
import React from "react";
import { type Product } from "@/models/products";
import ProductLink from "./ProductLink";
type Props = {
	product: Product;
	fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

const ProductImg = ({ product, fit }: Props) => {
	const { id, image, title } = product;
	return (
		<ProductLink id={id}>
			<Image
				className="relative h-max transition-all delay-100 duration-300 ease-in-out "
				quality={20}
				priority
				data-testid="mePic"
				src={image}
				alt={title}
				width={200}
				height={200}
				style={{ objectFit: fit }}
			/>
		</ProductLink>
	);
};

export default ProductImg;
