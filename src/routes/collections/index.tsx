import { LoaderFunction } from "@remix-run/node";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import { listCollections } from "~/graphql/queries";
import { useLoaderData } from "remix";
import { Collection, ListCollectionsQuery } from "~/API";
import { CenteredContainer } from "~/ui-library";

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
      <h1>Collections Page</h1>
      {sortedCollections.map((collection) => (
        <div key={collection.id}>
          <h2>{collection.name}</h2>
        </div>
      ))}
    </CenteredContainer>
  );
};

export default CollectionsPage;
