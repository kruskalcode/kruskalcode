/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  pageExtensions: ["js", "jsx"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
