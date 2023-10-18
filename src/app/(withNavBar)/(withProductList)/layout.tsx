import { Suspense } from "react";
import MainLoader from "@/UI/Loaders/MainLoader";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mb-3">
			{children}
			<Suspense fallback={<MainLoader />}>
				<RecommendedProducts />
			</Suspense>
		</div>
	);
}
