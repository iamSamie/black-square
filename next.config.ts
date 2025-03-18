import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/black-square',
  assetPrefix: '/black-square/',
};

export default nextConfig;
