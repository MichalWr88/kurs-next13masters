import React, { Suspense } from "react";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";

const layout = ({ children }: { children: React.ReactNode }) => (
	<div>
		{children}
		<Suspense fallback={"loading...."}>
			<RecommendedProducts />
		</Suspense>
	</div>
);

export default layout;
