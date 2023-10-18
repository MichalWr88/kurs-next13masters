import React, { Suspense } from "react";
import MainLoader from "@/UI/Loaders/MainLoader";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";

const layout = ({ children }: { children: React.ReactNode }) => (
	<div className="w-full flex flex-col justify-center items-center">
		{children}
		<Suspense fallback={<MainLoader />}>
			<RecommendedProducts />
		</Suspense>
	</div>
);

export default layout;
