import React, { useEffect } from "react";
import { ListPostsQuery, ListPostsQueryVariables, Post } from "../API";
import { Auth } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { Link } from "react-router-dom";
import { PostList } from "../features/post/PostList";
import { useUserContext } from "../features/auth/user-context";
import { useAmplifyQuery } from "../features/utils/amplify/useQuery";
import { styled } from "@stitches/react";

export const Home = () => {
  const user = useUserContext();
  const { data, loading, error, refetch } = useAmplifyQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts);
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((data.listPosts?.items as Post[]) || []);
    }
  }, [data]);

  if (loading) {
    return <CenteredContainer>Loading...</CenteredContainer>;
  }

  return (
    <CenteredContainer>
      <h1>Pano - Kamp.us</h1>
      <Container>
        <nav>
          <Link to="/send">Send a post</Link>
        </nav>
        <PostList posts={posts} refetch={refetch} />
        {user && <button onClick={() => Auth.signOut()}>Logout</button>}
      </Container>
    </CenteredContainer>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
