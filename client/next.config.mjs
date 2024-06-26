/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
            {
                protocol: "https",
                hostname: "placeimg.com",
            },
            {
                protocol: "http",
                hostname: "placeimg.com",
            },
        ],
    },
};

export default nextConfig;
