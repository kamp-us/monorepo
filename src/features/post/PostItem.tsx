import { Post } from "~/API";
import { useActionData } from "@remix-run/react";
import { FC } from "react";
import { useUserContext } from "../auth/user-context";
import { UpvoteButton } from "~/ui-library/UpvoteButton";
import { ExternalLink } from "~/ui-library/ExternalLink";
import { SmallLink } from "~/ui-library/SmallLink";
import { GappedBox } from "~/ui-library/GappedBox";
import { Box } from "~/ui-library/layout-components/Box";
import { Form } from "~/ui-library/Form";
import { useFetcher } from "@remix-run/react";

type PostItemProps = {
  post: Post;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const user = useUserContext();
  const fetcher = useFetcher();
  const isLoading = !!fetcher.submission;

  const variables = !post.isUpvoted
    ? {
        type: "create",
        input: {
          postID: post.id,
          postUpvotesId: post.id,
          owner: user?.username,
        },
      }
    : {
        type: "delete",
        input: {
          postID: post.id,
          owner: user?.username,
        },
      };

  return (
    <GappedBox css={{ padding: 5, alignItems: "center" }}>
      <fetcher.Form method="post" action="/upvote">
        <UpvoteButton
          isUpvoted={!!post.isUpvoted}
          upvoteCount={post.upvoteCount ?? 0}
          isVoting={isLoading}
        />
        <input type="hidden" name="json" value={JSON.stringify(variables)} />
      </fetcher.Form>
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
          <Box>@{post.owner}</Box> |
          <SmallLink to={`/posts/${post.id}`}>
            {post.commentCount} yorum
          </SmallLink>
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
