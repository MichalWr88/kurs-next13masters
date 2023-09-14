import { Suspense } from "react";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { getProductsList } from "@/providers/restApiProvider/restApiProvider";

const getPaginationTotalCount = async () =>{
	const take = 1000;
	let offset = 0;
	let total = 0;
let respons = -1

	while (respons !== 0 ) {
		const resp = await getProductsList({take:take.toString(),offset:offset.toString()});
		respons = resp.length;
		offset += take +1;
		total += respons;
	}
	return total
}



export default async function RootLayout({ children }: { children: React.ReactNode }) {
const totalCount = await getPaginationTotalCount()
console.log("du[pa",totalCount)
	return (
		<div className="container mb-3">
			<RoutePagination basePath="/products" className="pagination-bar" currentPage={1} totalCount={totalCount} pageSize={20} />
			{children}
			<Suspense fallback={"loading...."}>
				<RecommendedProducts />
			</Suspense>
		</div>
	);
}
