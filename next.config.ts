import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/", destination: "/proposal.html" },
    ];
  },
};

export default nextConfig;
