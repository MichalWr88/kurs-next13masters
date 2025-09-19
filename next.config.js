/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1", // Matched parameters can be used in the destination
				permanent: true,
			},
			{
				source: "/collections/:slug",
				destination: "/collections/:slug/1", // Matched parameters can be used in the destination
				permanent: true,
			},
		];
	},
	// typedRoutes is now a top-level option in Next.js 15
	// typedRoutes: true,
	
	experimental: {
		serverActions: true,
		mdxRs: true,
		// serverActions: {
		// 	bodySizeLimit: "2mb",
		// },
	},

	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	images: {
		domains: [
			"fakestoreapi.com",
			"naszsklep-api.vercel.app",
			"localhost",
			"kurs-next13masters.vercel.app",
			"rv19.mikr.us:30291",
			"strapi.cytr.us",
		],
		qualities: [20, 75, 100],
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
