import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dexm7t5ty/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
