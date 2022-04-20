import { ListPostsQuery, ListPostsQueryVariables, Post } from "~/API";
import { listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { gql } from "@apollo/client";
import { LoaderFunction, useLoaderData } from "remix";
import { createClient } from "~/graphql/apollo-client";

type LoaderData = {
  data: ListPostsQuery;
};

export const loader: LoaderFunction = async () => {
  const client = await createClient();

  const { data, error } = await client.query<
    ListPostsQuery,
    ListPostsQueryVariables
  >({
    query: gql(listPosts),
  });

  if (error) {
    throw error;
  }

  return { data };
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();
  const posts = (data.listPosts?.items as Post[]) || [];
  const sortedPosts = [...posts].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={sortedPosts} />
    </CenteredContainer>
  );
};

export default Home;
