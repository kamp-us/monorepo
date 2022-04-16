import {
  CreateUpvoteMutation,
  CreateUpvoteMutationVariables,
  DeleteUpvoteMutation,
  DeleteUpvoteMutationVariables,
  Post,
} from "../../API";
import { FC } from "react";
import { createUpvote, deleteUpvote } from "../../graphql/mutations";
import { useUserContext } from "../auth/user-context";
import { UpvoteButton } from "../../ui-library/UpvoteButton";
import { ExternalLink } from "../../ui-library/ExternalLink";
import { SmallLink } from "../../ui-library/SmallLink";
import { GappedBox } from "../../ui-library/GappedBox";
import { gql, useMutation } from "@apollo/client";

type PostItemProps = {
  post: Post;
  onUpvoteSuccess?: () => void;
};

export const PostItem: FC<PostItemProps> = ({ post, onUpvoteSuccess }) => {
  const user = useUserContext();

  const [createUpvoteMutation] = useMutation<
    CreateUpvoteMutation,
    CreateUpvoteMutationVariables
  >(gql(createUpvote));

  const [deleteUpvoteMutation] = useMutation<
    DeleteUpvoteMutation,
    DeleteUpvoteMutationVariables
  >(gql(deleteUpvote));

  const handleUpvote = async () => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    try {
      if (!!post.isUpvoted) {
        const variables = {
          input: {
            postID: post.id,
            owner: user.username,
          },
        };
        await deleteUpvoteMutation({ variables });
      } else {
        const variables = {
          input: {
            postID: post.id,
            postUpvotesId: post.id,
            owner: user.username,
          },
        };
        await createUpvoteMutation({ variables });
      }
      onUpvoteSuccess?.();
    } catch (err) {
      console.log("error upvoting", err);
    }
  };

  return (
    <GappedBox css={{ padding: 5, alignItems: "center" }}>
      <UpvoteButton
        isUpvoted={!!post.isUpvoted}
        onClick={handleUpvote}
        upvoteCount={post.upvoteCount ?? 0}
      />
      <GappedBox css={{ flexDirection: "column" }}>
        <GappedBox css={{ alignItems: "center" }}>
          <ExternalLink
            href={`//${post.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </ExternalLink>
          <SmallLink to={post.url}>{post.url}</SmallLink>
        </GappedBox>
        <GappedBox
          css={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            color: "$gray9",
            fontSize: "0.8rem",
          }}
        >
          <div>{post.owner}</div> |
          <SmallLink to={`posts/${post.id}`}>
            {post.commentCount} yorum
          </SmallLink>
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
