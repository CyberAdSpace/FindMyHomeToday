import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ancient-sea-56b3.wade-berlin.workers.dev",
      },
    ],
  },
};

export default nextConfig;
