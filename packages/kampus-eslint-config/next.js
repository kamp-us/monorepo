/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ["next", "turbo", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],
    "import/order": [
      "error",
      {
        groups: [["external", "builtin"], "internal", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc" },
      },
    ],
  },
};

module.exports = config;
