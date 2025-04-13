import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/forms/list',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
