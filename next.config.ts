import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Menginformasikan Turbopack lokasi root proyek
  turbopack: { root: __dirname },
};

export default nextConfig;
