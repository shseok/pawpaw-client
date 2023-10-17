/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/endpoint/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_BASE_API_URL}/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    domains: ['via.placeholder.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
