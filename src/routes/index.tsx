import {
  Collection,
  ListCollectionPostsQueryVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  ListPostsQuery,
  ListPostsQueryVariables,
  Post,
} from "~/API";
import { listCollections, listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { gql } from "@apollo/client";
import { LoaderFunction, useLoaderData } from "remix";
import { createClient } from "~/graphql/apollo-client";
import { AuthUser } from "~/features/auth/user-context";
import { fetchUser } from "~/features/auth/useFetchUser";
import { Auth } from "aws-amplify";

type LoaderData = {
  posts: ListPostsQuery;
  collections: ListCollectionsQuery;
};

export const loader: LoaderFunction = async () => {
  const client = await createClient();
  let user: AuthUser | null;
  try {
    user = await fetchUser(Auth);
  } catch {
    user = null;
  }

  const { data: posts, error: postsError } = await client.query<
    ListPostsQuery,
    ListPostsQueryVariables
  >({
    query: gql(listPosts),
  });

  if (postsError) {
    console.log("index route", postsError);
    return { posts: null, collections: null, postsError };
  }

  const { data: collections, error: collectionsError } = await client.query<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >({
    query: gql(listCollections),
    variables: {
      filter: {
        owner: {
          eq: user?.username,
        },
      },
    },
  });

  if (collectionsError) {
    console.log("index route", collectionsError);
    return { posts: posts, collections: null, collectionsError };
  }

  return { posts, collections };
};

export const Home = () => {
  const { posts: postsData, collections: collectionsData } =
    useLoaderData<LoaderData>();
  const posts = (postsData.listPosts?.items as Post[]) || [];
  const collections =
    (collectionsData.listCollections?.items as Collection[]) || [];
  const sortedPosts = [...posts].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={sortedPosts} collections={collections} />
    </CenteredContainer>
  );
};

export default Home;
