import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=14400, stale-while-revalidate=86400"
          }
        ]
      }
    ];
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
