import { Collection, Post } from "~/API";
import { useFetcher } from "@remix-run/react";
import { FC } from "react";
import { useUserContext } from "../auth/user-context";
import {
  Box,
  ExternalLink,
  GappedBox,
  SmallLink,
  UpvoteButton,
} from "~/ui-library";
import { MoreOptionsDropdown } from "~/ui-library/MoreOptionsDropdown";

type PostItemProps = {
  post: Post;
  collections: Collection[] | [];
};

export const PostItem: FC<PostItemProps> = ({ post, collections }) => {
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
          <SmallLink to={`//${post.url}`}>{post.url}</SmallLink>
        </GappedBox>
        <GappedBox
          css={{
            alignItems: "center",
            color: "$gray9",
            fontSize: "0.8rem",
          }}
        >
          <Box>@{post.owner}</Box> |
          <SmallLink to={`/posts/${post.id}`}>
            {post.commentCount} yorum
          </SmallLink>
          {user && (
            <>
              | <MoreOptionsDropdown collections={collections} post={post} />
            </>
          )}
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
