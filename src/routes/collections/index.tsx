import { LoaderFunction } from "@remix-run/node";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import { listCollections } from "~/graphql/queries";
import { useLoaderData } from "remix";
import { Collection, ListCollectionsQuery } from "~/API";
import {
  Box,
  CenteredContainer,
  GappedBox,
  Link,
  SmallLink,
  Text,
} from "~/ui-library";

export const loader: LoaderFunction = async ({}) => {
  const client = await createClient();

  const { data, error } = await client.query({
    query: gql(listCollections),
  });

  if (error) {
    return { data: null, error };
  }

  return { data };
};

type LoaderData = {
  data: ListCollectionsQuery;
};

const CollectionsPage = () => {
  const { data } = useLoaderData<LoaderData>();
  const collections = (data.listCollections?.items as Collection[]) || [];
  const sortedCollections = [...collections].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer>
      {sortedCollections.map((collection) => (
        <GappedBox
          css={{
            alignItems: "center",
            color: "$gray9",
            fontSize: "0.8rem",
          }}
        >
          <Box>@{collection.owner}</Box> |
          <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
        </GappedBox>
      ))}
    </CenteredContainer>
  );
};

export default CollectionsPage;
