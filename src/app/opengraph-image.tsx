import { ImageResponse } from "next/server";
// import { executeGraphql } from "@/api/graphQL/graphQLProvider";
// import { ProductGetBySlugDocument } from "@/gql/graphql";

export const runtime = "edge";

// export const config = {
// 	runtime: "experimental-edge",
// };

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og() {
	//{ params: { slugId } }: { params: { slugId: string } }
	// const resp = await executeGraphql({
	// 	query: ProductGetBySlugDocument,
	// 	variables: { slug: slugId },
	// });
	// const product = resp.products?.data[0]?.attributes;

	return new ImageResponse(
		(
			<div
				tw="w-full h-full flex flex-col items-center justify-center text-8xl"
				style={{
					color: "#FFF2ED",
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">next13</p>
				<p tw="font-serif m-0 p-0 font-black">masters</p>
				<p tw="m-0 mt-2">Sklep TOP </p>
				{/* <p tw="m-0 mt-2">{product?.title}</p>
				<p tw="m-0 mt-2">{product?.description}</p> */}
			</div>
		),
	);
}
