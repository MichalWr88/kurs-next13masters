import { notFound } from "next/navigation";
import React from "react";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import SelectSortProducts from "@/UI/Select/SelectSortProducts";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

export const generateStaticParams = async () => [
	{ pageTakeNumber: "1" },
	{ pageTakeNumber: "2" },
	{ pageTakeNumber: "3" },
];

const ProductPage = async ({
	params,
	searchParams,
}: {
	searchParams: Promise<{ sortDir: string; sortBy: string }>;
	params: Promise<{ pageTakeNumber: string }>;
}) => {
	const { pageTakeNumber } = await params;
	const searchParamsData = await searchParams;
	const resp = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			page: Number(pageTakeNumber),
			pageSize: 20,
			sort: searchParamsData.sortBy ? [`${searchParamsData.sortBy}:DESC`] : undefined,
		},
	});
	if (!resp.products) {
		throw notFound();
	}

	return (
		<>
			<SelectSortProducts searchParams={searchParamsData} basePath="/products" />
			<ProductList header="Products list" testId="products-list">
				{resp.products?.data.map((item) => {
					if (!item.attributes) return null;

					return (
						<li key={`product-${item.attributes.slug}`}>
							<ProductElem
								product={item.attributes}
								priceTestId="product-price"
								ratingTestId="product-rating"
							/>
						</li>
					);
				})}
			</ProductList>
			<RoutePagination
				basePath={"/products"}
				currentPage={Number(pageTakeNumber)}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
};

export default ProductPage;
