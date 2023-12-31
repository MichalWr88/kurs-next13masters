import { type Route } from "next";
import { notFound } from "next/navigation";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

const CategoriesIdPage = async ({
	params,
}: {
	params: { collectionId: string; pageTakeNumber: string };
}) => {
	const resp = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			page: Number(params.pageTakeNumber),
			pageSize: 20,
			filters: { collections: { slug: { eq: params.collectionId } } },
		},
	});

	if (!resp.products?.data || resp.products?.data.length === 0) {
		throw notFound();
	}

	return (
		<>
			<ProductList header="Products list">
				{resp.products?.data.map((item) => {
					if (!item.attributes) return null;

					return (
						<li key={`collection-${item.attributes.slug}`}>
							<ProductElem product={item.attributes} />
						</li>
					);
				})}
			</ProductList>
			<RoutePagination
				basePath={`/collections/${params.collectionId}` as Route}
				currentPage={Number(params.pageTakeNumber)}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
};

export default CategoriesIdPage;
