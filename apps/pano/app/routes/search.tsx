import { CenteredContainer, Text } from "@kampus/ui";
import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import type { PostWithCommentCount } from "~/models/post.server";
import { searchPosts } from "~/models/post.server";

type LoaderDataSuccess = {
  query: string;
  data: PostWithCommentCount[];
};

type LoaderDataError = {
  status: number;
  error: string;
};

type LoaderData = LoaderDataSuccess | LoaderDataError;

const isError = (data: LoaderData): data is LoaderDataError => {
  return (data as LoaderDataError).error !== undefined;
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q");
  if (!searchQuery) {
    return json<LoaderData>({ status: 400, error: "Query is required" });
  }

  try {
    const posts = await searchPosts(searchQuery);
    return json({ data: posts, query: searchQuery });
  } catch (e) {
    return json<LoaderDataError>({
      status: 500,
      error: e as string,
    });
  }
};

export const Search = () => {
  const loaderData = useLoaderData() as LoaderData;

  if (isError(loaderData)) {
    return (
      <>
        <CenteredContainer css={{ paddingTop: 20 }}>
          <Text as="h1">Arama Sonuçları - Hata</Text>
        </CenteredContainer>
      </>
    );
  }

  const { query, data } = loaderData;

  return (
    <>
      <CenteredContainer css={{ paddingTop: 20 }}>
        <Text as="h1">Arama Sonuçları - {query}</Text>
        <PostList posts={data} />
      </CenteredContainer>
    </>
  );
};

export default Search;
