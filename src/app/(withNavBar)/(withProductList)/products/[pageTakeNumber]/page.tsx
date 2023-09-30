import { notFound } from "next/navigation";
import React from "react";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

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
	const resp = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			page: Number(pageTakeNumber),
			pageSize: 20,
		},
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
