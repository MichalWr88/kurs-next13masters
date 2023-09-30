
import React from "react";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";
import ProductElem from "../Product/ProductElem";
import ProductList from "../ProductList/ProductList";

const RecommendedProducts = async () => {
	// const products = await getProductsList({ take: "5", offset: "100" });
	const resp = await executeGraphql({query:ProductsGetListDocument, variables: {
		page: 1,
		pageSize: 4,
		sort: ["rating:DESC"],
	}});
	

	return (
		<div className="border-t-2 mt-2 pt-4 bg-brand-color-3">

		<ProductList header="Recommended Products">
		{resp.products?.data.map((item) => {
			if (!item.attributes) return null;

			return (
				<li key={`product-${item.attributes.slug}`}>
					<ProductElem product={item.attributes} />
				</li>
			);
		})}
	</ProductList>
		</div>
	);
};

export default RecommendedProducts;
