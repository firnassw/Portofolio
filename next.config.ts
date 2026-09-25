import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Menginformasikan Turbopack lokasi root proyek
  turbopack: { root: __dirname },
};

export default nextConfig;
