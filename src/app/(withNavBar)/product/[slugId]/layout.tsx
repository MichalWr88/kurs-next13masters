import React, { Suspense } from "react";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";
import ReviewsWrapper from "@/UI/Reviews/ReviewsWrapper";

const layout = ({ children }: { children: React.ReactNode }) => (
	<div>
		{children}
		<Suspense fallback={"loading...."}>
			<RecommendedProducts />
		</Suspense>
		<Suspense fallback={"loading...."}>
			<ReviewsWrapper />
		</Suspense>
	</div>
);

export default layout;
