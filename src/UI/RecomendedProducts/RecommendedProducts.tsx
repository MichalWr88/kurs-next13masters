import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProductsList } from "@/providers/restApiProvider/restApiProvider";

const RecommendedProducts = async () => {
	const products = await getProductsList({ take: "5", offset: "100" });

	return (
		<section>
			<header>
				<h1>Recommended Products</h1>
			</header>
			<ul className="flex bg-brand-color-3">
				{products.map((item) => {
					const { id, category, image, title, price, rating } = item;
					return (
						<li key={`recommended-${id}`}>
							<figure className="">
								<Link
									className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-3xl"
									href={`/product/${id}`}
								>
									<Image
										className="relative "
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
										<div className="">
											<b>$</b>
											{price}
										</div>
										<div>{rating.count}</div>
										<div>{rating.rate}</div>
									</div>
									<div className="row justify-between p-2">
										<div>{category} </div>
									</div>
								</figcaption>
							</figure>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default RecommendedProducts;
