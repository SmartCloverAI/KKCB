import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    deviceSizes: [640, 828, 1080, 1200, 1600, 1920],
    formats: ["image/webp"],
    minimumCacheTTL: 14400
  }
};

export default nextConfig;
