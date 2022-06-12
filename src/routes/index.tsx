import { Collection, ListCollectionsQuery, ListPostsQuery, Post } from "~/API";
import { listCollections, listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { json, LoaderFunction, useLoaderData } from "remix";
import { withSSR } from "~/features/utils/amplify/withSSR";

type LoaderData = {
  data: {
    posts: ListPostsQuery;
    collections: ListCollectionsQuery;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const { graphql } = withSSR({ request });
  const posts = await graphql({ query: listPosts });
  const collections = await graphql({ query: listCollections });

  if (!posts || !collections) {
    return json(null, { status: 500 });
  }

  return { data: { posts, collections } };
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();
  const { posts, collections } = data;
  console.log(data);
  const postsData = (posts.listPosts?.items as Post[]) || [];
  const collectionsData =
    (collections.listCollections?.items as Collection[]) || [];
  const sortedPosts = [...postsData].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={sortedPosts} collections={collectionsData} />
    </CenteredContainer>
  );
};

export default Home;
