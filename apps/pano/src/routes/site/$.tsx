import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import { getPostsBySite, Post } from "~/models/post.server";
import { CenteredContainer } from "~/ui-library";

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const sitename = params["*"];

  if (!sitename) return json(null, { status: 400 });

  const posts = await getPostsBySite(sitename);

  if (!posts) {
    return json(null, { status: 500 });
  }

  return json<LoaderData>({ posts });
};

export const Search = () => {
  const { posts } = useLoaderData<LoaderData>();
  const sortedPosts = [...posts].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={sortedPosts} />
    </CenteredContainer>
  );
};

export default Search;
