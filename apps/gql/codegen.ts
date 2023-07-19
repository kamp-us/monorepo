import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = { Date: "string", DateTime: "string" };

const config: CodegenConfig = {
  schema: ["schema/schema.graphql"],
  generates: {
    "./schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        avoidOptionals: true,
        contextType: "./types#KampusGQLContext",
        scalars: {
          Date: "string",
          DateTime: "string",
        },
      },
    },
    "./schema/introspection.json": {
      plugins: ["introspection"],
      config: {
        scalars,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
