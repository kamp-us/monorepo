import React, { useEffect } from "react";
import { ListPostsQuery, ListPostsQueryVariables, Post } from "../API";
import { listPosts } from "../graphql/queries";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { PostList } from "../features/post/PostList";
import { useAmplifyQuery } from "../features/utils/amplify/useQuery";
import { Box } from "../ui-library/layout-components/Box";

export const Home = () => {
  const { data, refetch } = useAmplifyQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts);
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((data.listPosts?.items as Post[]) || []);
    }
  }, [data]);

  return (
    <CenteredContainer>
      <Box css={{ paddingTop: 20 }}>
        <PostList posts={posts} refetch={refetch} />
      </Box>
    </CenteredContainer>
  );
};
