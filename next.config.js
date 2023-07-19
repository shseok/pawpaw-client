/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],

    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };

        return config;
    },
});

module.exports = nextConfig;