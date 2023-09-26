import { notFound } from "next/navigation";
import ProductElem from "@/UI/Product/ProductElem";
import ProductList from "@/UI/ProductList/ProductList";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetListDocument } from "@/gql/graphql";

export const generateStaticParams = async () => [
	{ pageTakeNumber: "1" },
	{ pageTakeNumber: "2" },
	{ pageTakeNumber: "3" },
];

const CategoriesIdPage = async ({
	params,
}: {
	params: { collectionId: string; pageTakeNumber: string };
}) => {
	
	const resp = await executeGraphql(ProductsGetListDocument, {
		page: Number(params.pageTakeNumber),
		pageSize: 20,
		filters: { collections: { slug: { eq: params.collectionId } } },
	});
	console.log("params",params,resp.products?.meta)
	if (!resp.products?.data || resp.products?.data.length === 0) {
		throw notFound();
	}

	return (
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
	);
};

export default CategoriesIdPage;
