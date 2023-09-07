import Image from "next/image";


type Rating = {
	rate: number;
	count: number;
};
type Product = {
	id: number;
	title: string;

	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
};

const PageProducts = async () => {
 
	const products: Array<Product> = await fetch("https://fakestoreapi.com/products?limit=4&sort=desc")
		.then((res) => res.json())
		.then((json: Array<Product>) => json);

	return (
		<>
			<h1>Products list</h1>
			<ul data-testid="products-list">
				{products.map((item) => {
          const {id, description,category,image,title} = item
					return (
						<li key={`product-${id}`}>
							<figure>
              <Image
              className="rounded-lg shadow-2xl"
              quality={20}
              priority
              data-testid="mePic"
              src={image}
              alt={title}
              width={200}
              height={200}
            />
								<figcaption className="row">
									<div className="row justify-between">
										<h3>{title}</h3>
										<div>price</div>
									</div>
									<div className="row justify-between">
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

export default PageProducts;
