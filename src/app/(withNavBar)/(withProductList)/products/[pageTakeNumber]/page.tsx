import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductImg from "@/UI/Product/ProductImg";
import Rating from "@/UI/Rating/Rating";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import { notFound } from "next/navigation";

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
	if (!resp.products) {
		throw notFound();
	}

	return (
		<ProductList header="Products list">
			{resp.products?.data.map((item) => {
				if (!item.attributes) return null;

				return (
					<li key={`product-${item.attributes.slug}`}>
						<ProductElem product={item.attributes} />
					</li>
				);
			})}
		</ProductList>
	);
};

export default ProductPage;
