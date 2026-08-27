/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: false,
  allowedDevOrigins: ['192.168.0.101', '192.168.0.*'],
};

module.exports = nextConfig;
