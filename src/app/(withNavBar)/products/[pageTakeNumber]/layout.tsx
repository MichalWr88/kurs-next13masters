import { Suspense } from "react";
import RecommendedProducts from "@/UI/RecomendedProducts/RecommendedProducts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mb-3">
			{children}
			<Suspense fallback={"loading...."}>
				<RecommendedProducts />
			</Suspense>
		</div>
	);
}
