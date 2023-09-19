/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
      {
        source: '/categories/:slug',
        destination: '/categories/:slug/1', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
	experimental: {
    typedRoutes: true,
  },
	images: {
		domains: ["fakestoreapi.com","naszsklep-api.vercel.app","localhost"],
	},
};

module.exports = nextConfig;
