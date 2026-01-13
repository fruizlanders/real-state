// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Quita 'output: export' y 'basePath' */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
