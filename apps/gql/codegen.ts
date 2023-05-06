import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema/schema.graphql",
  generates: {
    "./src/schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
