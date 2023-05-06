/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: ["prettier", "turbo"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "off",
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
