import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/real-state", // Agrega el nombre de tu repositorio aquí
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
