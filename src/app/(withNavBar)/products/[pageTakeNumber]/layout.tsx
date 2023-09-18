import { Suspense } from "react";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { ProductsGetCountListDocument } from "@/gql/graphql";


export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const resp = await executeGraphql(ProductsGetCountListDocument, {});

	console.log("total",resp.products?.meta.pagination.total)
	return (
		<div className="container mb-3">
			<RoutePagination
				basePath="/products"
				currentPage={1}
				totalCount={resp.products?.meta.pagination.total?? 0}
				pageSize={20}
			/>
			{children}
			<Suspense fallback={"loading...."}>
				<RecommendedProducts />
			</Suspense>
		</div>
	);
}
