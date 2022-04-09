import { CreateUpvoteMutation, Post } from "../../API";
import React, { FC } from "react";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { createUpvote } from "../../graphql/mutations";
import { useUserContext } from "../auth/user-context";
import { useAmplifyMutation } from "../utils/amplify/useMutation";

type PostItemProps = {
  post: Post;
  refetch: () => void;
};

export const PostItem: FC<PostItemProps> = ({ post, refetch }) => {
  const user = useUserContext();
  const { mutationFn } = useAmplifyMutation<CreateUpvoteMutation>(createUpvote);

  const handleUpvote = async () => {
    const variables = {
      input: {
        postID: post.id,
        postUpvotesId: post.id,
        owner: user?.username as string,
      },
    };

    try {
      await mutationFn(variables);
      refetch();
    } catch (err) {
      console.log("error upvoting", err);
    }
  };

  return (
    <Container>
      {!post.isUpvoted && <button onClick={handleUpvote}>Upvote</button>}
      {post.upvoteCount} upvotes
      <Link to={`posts/${post.id}`}>{post.commentCount} comments</Link>
      <a href={`//${post.url}`} target="_blank" rel="noopener noreferrer">
        {post.title}
      </a>
      <p>{post.url}</p>
      <p>{post.owner}</p>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 20,
  backgroundColor: "wheat",
  gap: 10,
});
