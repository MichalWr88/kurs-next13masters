import { notFound } from "next/navigation";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql, getCategoriesList } from "@/api/graphQL/graphQLProvider";
import { ProductsGetCountListByCategorySlugDocument } from "@/gql/graphql";
import type { Route } from "next";

export const generateStaticParams = async () => {
	const categories = await getCategoriesList();

	return categories
		.filter((category) => category.attributes?.slug)
		.map((category) => ({
			categoryId: category.attributes?.slug,
		}));
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { categoryId: string };
}) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const resp = await executeGraphql({
		query: ProductsGetCountListByCategorySlugDocument,
		variables: { slug: params.categoryId },
	});
	if (!resp.products) {
		throw notFound();
	}

	return (
		<>
			{children}
			<RoutePagination
				basePath={`/categories/${params.categoryId}` as Route}
				currentPage={1}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
}
