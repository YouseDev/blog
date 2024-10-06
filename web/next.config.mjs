/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 31536000,
    },
}

export default nextConfig
