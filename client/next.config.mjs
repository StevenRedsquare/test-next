/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*", // SET in specific url
            },
            {
                protocol: "http",
                hostname: "*",
            },
        ],
    },
};

export default nextConfig;
