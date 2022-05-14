import { LoaderFunction } from "@remix-run/node";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import { getCollection } from "~/graphql/queries";
import { useLoaderData } from "remix";
import { CollectionPosts, GetCollectionQuery, Post } from "~/API";
import { CenteredContainer, GappedBox, SmallLink, Text } from "~/ui-library";

export const loader: LoaderFunction = async ({ request, params }) => {
  const client = await createClient();

  const { data, error } = await client.query({
    query: gql(getCollection),
    variables: { id: params.id },
  });

  return { data };
};

const SingleCollection = () => {
  const { data } = useLoaderData<{ data: GetCollectionQuery }>();
  const collectionPosts =
    (data.getCollection?.posts?.items as CollectionPosts[]) || [];
  const posts = collectionPosts.map((post) => post.post);

  return (
    <CenteredContainer>
      {posts.map((post) => {
        return (
          <GappedBox>
            <SmallLink to={`/posts/${post.id}`}>{post.title}</SmallLink>
          </GappedBox>
        );
      })}
    </CenteredContainer>
  );
};

export default SingleCollection;
