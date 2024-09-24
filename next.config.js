/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/blog",
				destination: "https://starter-kit-mu.vercel.app/blog",
			},
			{
				source: "/blog/:path*",
				destination: "https://starter-kit-mu.vercel.app/blog/:path*",
			},
			{
				source: "/gh",
				destination: "https://github.com/sebzz2k2"
			},
			{
				source: "/x",
				destination: "https://x.com/sebin2k2"
			},
			{
				source: "/in",
				destination: "https://www.linkedin.com/in/sebin-chacko-mathew-29404722a/"
			}
		];
	},
}

module.exports = nextConfig
