import { parser, type Metadata } from "html-metadata-parser";

import { createDataLoader } from "~/../../packages/gql-utils";
import { type RafineMetadata } from "~/schema/types.generated";

export const createRafineLoaders = () => {
  return {
    metadata: createMetadataLoader(),
  };
};

const createMetadataLoader = () => {
  const parse = createDataLoader<string, Metadata>(
    async (urls) => await Promise.all(urls.map((url) => parser(url)))
  );

  return {
    parse,
  };
};

export const transformMetadata = (metadata: Metadata) => {
  return {
    ...metadata,
    description: metadata.meta.description || "",
    title: metadata.meta.title || "",
    url: metadata.meta.url || "",
    __typename: "RafineMetadata",
  } satisfies RafineMetadata;
};
