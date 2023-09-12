/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
    ]
  },
	experimental: {
    typedRoutes: true,
  },
	images: {
		domains: ["fakestoreapi.com","naszsklep-api.vercel.app"],
	},
};

module.exports = nextConfig;
