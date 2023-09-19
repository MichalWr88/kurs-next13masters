import { ReactNode } from "react";
import ProductListHeader from "./ProductListHeader";

const ProductList = ({ header,children }: { header: string; children: ReactNode }) => {
	console.log("test");
	return (
		<section className="body-font text-gray-600">
			<ProductListHeader header={header} />
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 p-2 sm:grid-cols-3 lg:grid-cols-4"
			>
				{children}
			</ul>
		</section>
	);
};

export default ProductList;
