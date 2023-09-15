import ProductImg from "@/UI/Product/ProductImg";

import { getProductById, getProductsList } from "@/providers/restApiProvider/restApiProvider";
import { prodOnly } from "@/utils";

export const generateStaticParams = async () => {
	const products = await prodOnly(getProductsList({ take: "50" }),[]);
	return products.map((prod) => prod.id);
};



const PageProduct = async ({ params: { productId } }: { params: { productId: string } }) => {
	
	const product = await getProductById(productId);
	return (
		<section className="flex justify-center p-3 ">
			<div className="relative h-96">
				<ProductImg product={product} />
			</div>
			<header>
				<h1>{product.title}</h1>
			</header>
		</section>
	);
};

export default PageProduct;
