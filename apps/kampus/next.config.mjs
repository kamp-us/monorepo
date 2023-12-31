const GQL_URL = process.env.NEXT_PUBLIC_GQL_URL ?? "";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@kampus/tailwind", "@kampus/ui", "@kampus/email"],

  compiler: {
    relay: {
      src: "./",
      language: "typescript",
    },
  },

  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/gql",
          destination: GQL_URL,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default config;
