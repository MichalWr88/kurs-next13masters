import React, { Suspense } from "react";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";

const layout = ({ children }: { children: React.ReactNode }) => (
	<div className="w-full flex flex-col">
		{children}
		<Suspense fallback={"loading...."}>
			<RecommendedProducts />
		</Suspense>
	</div>
);

export default layout;
