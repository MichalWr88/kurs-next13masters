import { notFound } from "next/navigation";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetCountListByCategorySlugDocument } from "@/gql/graphql";
import type { Route } from "next";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { categoryId: string };
}) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const resp = await executeGraphql(ProductsGetCountListByCategorySlugDocument, { slug: params.categoryId });
	if (!resp.products) {
		throw notFound();
	}
	console.log("categories", resp.products?.meta.pagination.total);
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
