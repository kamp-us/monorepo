/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@kampus/sozluk-content"],
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
};

export default config;
