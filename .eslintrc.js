/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@kampus/eslint-config/next"],
  parser: "@typescript-eslint/parser",
  settings: {
    next: {
      rootDir: ["apps/kampus", "apps/gql"],
    },
  },
};

module.exports = config;
