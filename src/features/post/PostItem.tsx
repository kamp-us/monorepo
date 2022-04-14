import { CreateUpvoteMutation, Post } from "../../API";
import { FC } from "react";
import { createUpvote } from "../../graphql/mutations";
import { useUserContext } from "../auth/user-context";
import { useAmplifyMutation } from "../utils/amplify/useMutation";
import { UpvoteButton } from "../../ui-library/UpvoteButton";
import { ExternalLink } from "../../ui-library/ExternalLink";
import { SmallLink } from "../../ui-library/SmallLink";
import { GappedBox } from "../../ui-library/GappedBox";

type PostItemProps = {
  post: Post;
  onUpvoteSuccess?: () => void;
};

export const PostItem: FC<PostItemProps> = ({ post, onUpvoteSuccess }) => {
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
