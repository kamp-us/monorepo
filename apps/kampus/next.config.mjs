/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@kampus/tailwind", "@kampus/ui-next", "@kampus/next-auth", "@kampus/email"],

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
        // if the host is `pano.*`,
        // this rewrite will be applied
        {
          source: "/:path((?!_next/|_static/|[\\w-]+\\.\\w+).*)",
          has: [
            {
              type: "host",
              value: "pano.(.*)",
            },
          ],
          destination: "/pano/:path",
        },
        // if the host is `sozluk.*`,
        // this rewrite will be applied
        {
          source: "/:path((?!_next/|_static/|[\\w-]+\\.\\w+).*)",
          has: [
            {
              type: "host",
              value: "sozluk.(.*)",
            },
          ],
          destination: "/sozluk/:path",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default config;
