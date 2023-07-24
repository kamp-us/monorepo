import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = { Date: "string", DateTime: "string" };

const config: CodegenConfig = {
  schema: "schema/schema.graphql",
  generates: {
    "./schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,

        // interfaces are only responsible for defining a __resolveType resolver
        // and implementing types are responsible for returning the fields.
        onlyResolveTypeForInterfaces: true,

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
