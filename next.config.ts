import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Menginformasikan Turbopack lokasi root proyek
  turbopack: { root: __dirname },
};

export default nextConfig;
