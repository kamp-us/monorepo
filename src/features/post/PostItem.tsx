import type { Post } from "~/API";
import { useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { useUserContext } from "../auth/user-context";
import {
  Box,
  ExternalLink,
  GappedBox,
  SmallLink,
  UpvoteButton,
} from "~/ui-library";
import normalizeUrl from "normalize-url";
import { MoreOptionsDropdown } from "~/ui-library/MoreOptionsDropdown";
import { canUserEdit } from "~/features/auth/can-user-edit";

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

  const normalized = normalizeUrl(post.url);

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
          <ExternalLink href={normalized}>{post.title}</ExternalLink>
          {post.site && (
            <SmallLink to={`/site/${post.site}`}>{post.site}</SmallLink>
          )}
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
          {canUserEdit(user, post) && (
            <>
              | <MoreOptionsDropdown post={post} />
            </>
          )}
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
