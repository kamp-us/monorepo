import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = { Date: "string", DateTime: "string" };

const config: CodegenConfig = {
  schema: "schema/schema.graphql",
  generates: {
    "./schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        contextType: "./types#KampusGQLContext",
        avoidOptionals: true,
        enumsAsTypes: true,
        makeResolverTypeCallable: true,
        optionalInfoArgument: true,
        useTypeImports: true,

        // scalars config
        scalars,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
