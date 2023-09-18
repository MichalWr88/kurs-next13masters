import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";
import React, { Suspense } from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => (
		<div>
			{children}
			<Suspense fallback={"loading...."}>
				<RecommendedProducts />
			</Suspense>
		</div>
	);

export default layout;
