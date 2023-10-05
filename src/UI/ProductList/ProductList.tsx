import clsx from "clsx";
import { type ReactNode } from "react";
import ProductListHeader from "./ProductListHeader";

const ProductList = ({
	header,
	children,
	classString,
	testId,
}: {
	header?: string;
	children: ReactNode;
	classString?: string;
	testId?: string;
	
}) => (
		<section className=" text-gray-600 ">
			<ProductListHeader header={header||""} />
			<ul
				data-testid={testId}
				className={clsx(
					"grid grid-cols-1 justify-center gap-8 p-2 sm:grid-cols-3 lg:grid-cols-4",
					classString,
				)}
			>
				{children}
			</ul>
		</section>
	);

export default ProductList;
