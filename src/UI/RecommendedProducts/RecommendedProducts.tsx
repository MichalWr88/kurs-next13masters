import Image from "next/image";
import Link from "next/link";
import React from "react";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";
import { getProductsList } from "@/providers/restApiProvider/restApiProvider";
import ProductImg from "../Product/ProductImg";

const RecommendedProducts = async () => {
	// const products = await getProductsList({ take: "5", offset: "100" });
	const resp = await executeGraphql(ProductsGetListDocument, {
		page: 1,
		pageSize: 4,
		sort: ["rating:DESC"],
	});
	const products = resp.products?.data;
	return (
		<section className="p-2">
			<header>
				<h2 className="text-xl font-bold">Recommended Products</h2>
			</header>
			<ul className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-4">
				{products?.map((product) => (
						<li key={`recommended-${product.attributes?.slug}`}>
							<ProductImg product={product.attributes} />
						</li>
					))}
			</ul>
		</section>
	);
};

export default RecommendedProducts;
