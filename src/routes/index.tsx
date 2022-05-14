import { Collection, ListCollectionsQuery, ListPostsQuery, Post } from "~/API";
import { listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { json, LoaderFunction, useLoaderData } from "remix";
import { withSSR } from "~/features/utils/amplify/withSSR";

type LoaderData = {
  posts: ListPostsQuery;
  collections: ListCollectionsQuery;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { graphql } = withSSR({ request });
  const data = await graphql({ query: listPosts });

  if (!data) {
    return json(null, { status: 500 });
  }

  return { data };
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
