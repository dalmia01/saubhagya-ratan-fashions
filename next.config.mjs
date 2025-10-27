/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopdumroo.com", // 👈 your external image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // 👈 your external image domain
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // 👈 your external image domain
        pathname: "/**",
      },
    ],
  },

};

export default nextConfig;
