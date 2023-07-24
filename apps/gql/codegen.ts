import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = { Date: "string", DateTime: "string" };

const config: CodegenConfig = {
  schema: "schema/schema.graphql",
  generates: {
    "./schema/types.generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // wraps the resolver types with following:
        // type WithIndex<T> = T & Record<string, any>;
        // this ensures the resolvers can only be dictionaries with string
        // keys to avoid using number or symbol keys which are normally
        // allowed in regular objects
        useIndexSignature: true,

        // Enforce __typename in return values of resolvers for types that
        // implements an interface, or part of a union.
        resolversNonOptionalTypename: true,
        optionalResolveType: true,
        //
        // interfaces are only responsible for defining a __resolveType resolver
        // and implementing types are responsible for returning the fields.
        onlyResolveTypeForInterfaces: true,

        // our custom context type so we have access to it in resolvers
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
