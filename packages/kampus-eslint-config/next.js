/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ["next", require("./index")],
};

module.exports = config;
