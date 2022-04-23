import React, { useEffect } from "react";
import { ListPostsQuery, ListPostsQueryVariables, Post } from "../API";
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

  try {
    const { data, error } = await client.query<
      ListPostsQuery,
      ListPostsQueryVariables
    >({
      query: gql(listPosts),
    });

    if (error) {
      console.log("index route", error);
      // throw error;
      return { data: null, error };
    }

    return { data };
  } catch (error) {
    console.log("index route", error);
    return { data: null, error };
  }
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((data.listPosts?.items as Post[]) || []);
    }
  }, [data]);

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={posts} />
    </CenteredContainer>
  );
};

export default Home;
