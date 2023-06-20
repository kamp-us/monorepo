/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@kampus/eslint-config"], // uses the config in `config/eslint`
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
  },
  settings: {
    next: {
      rootDir: ["apps/nextjs", "apps/gql"],
    },
  },
};

module.exports = config;
