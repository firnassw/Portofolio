import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: '/kompresi/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/projek/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
    ];
  },
  // Menginformasikan Turbopack lokasi root proyek
  turbopack: { root: __dirname },
};

export default nextConfig;
