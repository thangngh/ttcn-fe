/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "i.ibb.co",
      "hanoicomputercdn.com",
      "tailus.io",
      "i.pravatar.cc",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  swcMinify: true,
};

module.exports = nextConfig;
