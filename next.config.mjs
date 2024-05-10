/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "th.bing.com",
			},
			{
				protocol: "https",
				hostname: "rabiulislam.dev",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
