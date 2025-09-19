import { type Route } from "next";
import { notFound } from "next/navigation";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ categoryId: string; pageTakeNumber: string }>;
}) => {
	const { categoryId } = await params;
	return {
		title: categoryId,
		description: categoryId,
	};
};

const CategoriesIdPage = async ({
	params,
}: {
	params: Promise<{ categoryId: string; pageTakeNumber: string }>;
}) => {
	const { categoryId, pageTakeNumber } = await params;
	const resp = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			page: Number(pageTakeNumber),
			pageSize: 20,
			filters: { categories: { slug: { eq: categoryId } } },
		},
	});

	if (!resp.products?.data || resp.products?.data.length === 0) {
		throw notFound();
	}

	return (
		<>
			<h1>{`Products list ${categoryId}`}</h1>

			<ProductList>
				{resp.products?.data.map((item) => {
					if (!item.attributes) return null;

					return (
						<li key={`product-${item.attributes.slug}`}>
							<ProductElem product={item.attributes} />
						</li>
					);
				})}
			</ProductList>
			<RoutePagination
				basePath={`/categories/${categoryId}` as Route}
				currentPage={Number(pageTakeNumber)}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
};

export default CategoriesIdPage;
