
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";



const SearchPage = async ({ searchParams: { query } }: { searchParams: { query: string } }) => {
	const resp = await executeGraphql({query:ProductsGetListDocument, variables: {
		page: 1,
		pageSize: 20,
		filters:{title:{contains:query}},

	}});

	return 	<ProductList header="Recommended Products" testId="products-list">
	{resp.products?.data.map((item) => {
		if (!item.attributes) return null;

		return (
			<li key={`product-${item.attributes.slug}`}>
				<ProductElem product={item.attributes} />
			</li>
		);
	})}
</ProductList>;
};

export default SearchPage;
