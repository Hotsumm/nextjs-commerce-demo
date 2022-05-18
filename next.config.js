/** @type {import('next').NextConfig} */
const commerce = require('./commerce.config.json');
const nextConfig = {
  reactStrictMode: true,
  commerce,
  images: {
    domains: ['cdn11.bigcommerce.com'],
  },
};

module.exports = nextConfig;
