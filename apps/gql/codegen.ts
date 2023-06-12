import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema/schema.graphql",
  generates: {
    "./schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        avoidOptionals: true,
        contextType: "./types#KampusGQLContext",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
