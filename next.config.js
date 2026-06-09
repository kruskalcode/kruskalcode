/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ["js", "jsx"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
