import ProductImg from "@/UI/Product/ProductImg";
import { getProductById, getProductsList } from "@/providers/restApiProvider/restApiProvider";

export const generateStaticParams = async () => {
	const products = await getProductsList({ take: "50" });

	return products.map((prod) => prod.id);
};

const PageProduct = async ({ params: { productId } }: { params: { productId: string } }) => {
	const product = await getProductById(productId);
	return (
		<section className="flex p-3 justify-center ">
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
