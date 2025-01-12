import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false; // 개발 환경에서만 캐시 비활성화
    }
    return config;
  },

};

export default nextConfig;
