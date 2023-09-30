import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetCountListDocument } from "@/gql/graphql";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const resp = await executeGraphql({ query: ProductsGetCountListDocument });

	return (
		<>
			{children}
			<RoutePagination
				basePath={"/products"}
				currentPage={1}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
}
