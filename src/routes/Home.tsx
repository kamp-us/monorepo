import React, { useEffect } from "react";
import { ListPostsQuery, ListPostsQueryVariables, Post } from "../API";
import { listPosts } from "../graphql/queries";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { PostList } from "../features/post/PostList";
import { gql, useQuery } from "@apollo/client";

export const Home = () => {
  const { data, refetch } = useQuery<ListPostsQuery, ListPostsQueryVariables>(
    gql(listPosts)
  );
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((data.listPosts?.items as Post[]) || []);
    }
  }, [data]);

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={posts} refetch={refetch} />
    </CenteredContainer>
  );
};
