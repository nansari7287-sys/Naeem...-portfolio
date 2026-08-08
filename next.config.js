/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimization setting for local images
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
