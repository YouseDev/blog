/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
        minimumCacheTTL: 31536000,
    },
}

export default nextConfig
