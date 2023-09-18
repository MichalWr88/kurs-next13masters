"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactNode, useEffect, useState } from "react";
import { type Product } from "@/models/products";
type Props = {
	id: Product["id"];
	children: ReactNode;
};

const ProductLink = ({ children, id }: Props) => {
	const pathname = usePathname();
	const [isTheSame, setIsTheSame] = useState(false);
console.log(id)
	useEffect(() => {
		setIsTheSame(() => pathname === `/product/${id}`);

		return () => {
			setIsTheSame(() => false);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<Link
			as={isTheSame ? undefined : `/product/${id}`}
			className={clsx(
				"imgWrapper relative flex w-full items-center justify-center overflow-hidden rounded-3xl",
				isTheSame && "pointer-events-none",
			)}
			href={isTheSame ? `/product/${id}` : {}}
		>
			{children}
		</Link>
	);
};

export default ProductLink;
