/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopdumroo.com", // 👈 your external image domain
        pathname: "/**",
      },
    ],
  },

};

export default nextConfig;
