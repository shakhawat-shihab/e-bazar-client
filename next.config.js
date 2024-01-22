/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://cdn.dummyjson.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
