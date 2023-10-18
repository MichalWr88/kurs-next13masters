import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import SelectSortProducts from "@/UI/Select/SelectSortProducts";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

const SearchPage = async ({
	searchParams,
	searchParams: { query },
}: {
	searchParams: { query: string; sortDir: string; sortBy: string };
}) => {
	const resp = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			page: 1,
			pageSize: 20,
			filters: { title: { contains: query } },
			sort: searchParams.sortBy ? [`${searchParams.sortBy}:DESC`] : undefined,
		},
	});

	return (
		<div className="py-4">
			<SelectSortProducts searchParams={searchParams} basePath="/search" />
			<ProductList header="Result Search Products" testId="products-list">
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

export default SearchPage;
