// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	poweredByHeader: false,
// 	optimizeFonts: false,
// 	env: {
// 		APP_URL: process.env.REACT_APP_URL,
// 		APP_ENV: process.env.REACT_APP_ENV,
// 		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
// 	},
// 	async rewrites() {
// 		return [
// 			{
// 				source: '/api/:path*',
// 				destination: 'http://localhost:4200/api/:path*',
// 			},
// 			{
// 				source: '/uploads/:path*',
// 				destination: 'http://localhost:4200/uploads/:path*',
// 			},
// 		]
// 	},
// 	swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
	// disable: process.env.NODE_ENV === 'development',
	register: true,
	sw: 'service-worker.js',
})

module.exports = withPWA({
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`,
			},
		]
	},
})
