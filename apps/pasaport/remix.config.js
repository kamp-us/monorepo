/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "./app",
  serverDependenciesToBundle: ["normalize-url"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
};
