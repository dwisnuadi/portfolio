import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["knex", "mysql2"],
  },
  webpack: (config) => {
    config.externals.push("knex");
    return config;
  },
};

export default nextConfig;