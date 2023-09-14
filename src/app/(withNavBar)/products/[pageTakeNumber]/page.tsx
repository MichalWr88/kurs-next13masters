import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProductsList } from "@/providers/restApiProvider/restApiProvider";
import "./ProductPage.scss";
export const generateStaticParams = async () => [
	{ pageTakeNumber: "1" },
	{ pageTakeNumber: "2" },
	{ pageTakeNumber: "3" },
];

const ProductPage = async ({
	params: { pageTakeNumber },
}: {
	params: { pageTakeNumber: string };
}) => {
	const products = await getProductsList({ offset: (20*(Number(pageTakeNumber)-1)).toString(), take: "20" });

	return (
		<>
			<h1 className="bg-brand-bg-color uppercase p-2 text-xl container">Products list</h1>
			<ul data-testid="products-list" className="grid grid-cols-1 gap-8 p-2 md:grid-cols-4">
				{products.map((item) => {
					const { id, description, category, image, title, price, rating } = item;
					return (
						<li key={`product-${id}`} className="flex  justify-center bg-white rounded-3xl">
							<figure className="">
								<Link className="imgWrapper  relative flex h-52 w-full items-center justify-center overflow-hidden rounded-3xl" href={`/product/${id}`}>
									<Image
										className="relative h-max transition-all delay-100 duration-300 ease-in-out "
										quality={20}
										priority
										data-testid="mePic"
										src={image}
										alt={title}
										width={200}
										height={200}
										style={{ objectFit: "cover" }}
									/>
								</Link>
								<figcaption className="row">
									<div className="row justify-between">
										<h3 className="p-2 text-xl font-bold">{title}</h3>
										<div className=""><b>$</b>{price}</div>
										<div>{rating.count}</div>
										<div>{rating.rate}</div>
									</div>
									<div className="row justify-between p-2">
										<div>{category} </div>
										<div>{description}</div>
									</div>
								</figcaption>
							</figure>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProductPage;
