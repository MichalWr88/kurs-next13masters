import { URLSearchParams } from "url";
import { type Product, type ProductList } from "@/models/products";
const basePath = "https://naszsklep-api.vercel.app/api";

type SearchParams = {
	take?: string;
	offset?: string;
};

export const getProductsList = async (searchParams?: SearchParams) => {
	const defaultParams = { take: 5, offset: 0 };
	const params = searchParams ? { ...defaultParams, ...searchParams } : defaultParams;
	const data = new URLSearchParams();

	Object.entries(params).forEach(([key, value]) => data.append(key, value.toString()));

	const resp = await fetch(`${basePath}/products?${data.toString()}`)
		.then((res) => res.json())
		.then((json: ProductList) => json);

	return resp;
};

export const getProductById = async (id: Product["id"]) => {
	const resp = await fetch(`${basePath}/products/${id}`)
		.then((res) => res.json())
		.then((json: Product) => json);

	return resp;
};
