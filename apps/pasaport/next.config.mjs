/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@kampus/email", "@kampus/next-auth"],
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
};

export default config;
