import { useFetcher } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import type { Post } from "~/models/post.server";
import {
  Box,
  ExternalLink,
  GappedBox,
  SmallLink,
  UpvoteButton,
} from "~/ui-library";
import { MoreOptionsDropdown } from "~/ui-library/MoreOptionsDropdown";
import { canUserEdit } from "../auth/can-user-edit";
import { useUserContext } from "../auth/user-context";

type PostItemProps = {
  post: Post;
};

const getVariables = (
  type: "create" | "delete",
  input: { postID: string; userID: string }
) => {
  return { type, input };
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const user = useUserContext();
  const fetcher = useFetcher();
  const isLoading = !!fetcher.submission;

  const isUpvoted =
    user && post ? post.upvotes.some((u) => u.userID === user.id) : false;

  const variables = user
    ? isUpvoted
      ? getVariables("delete", { postID: post.id, userID: user.id })
      : getVariables("create", { postID: post.id, userID: user.id })
    : null;

  const normalized = normalizeUrl(post.url);

  return (
    <GappedBox css={{ padding: 5, alignItems: "center" }}>
      <fetcher.Form method="post" action="/upvote">
        <UpvoteButton
          isUpvoted={isUpvoted}
          upvoteCount={post.upvotes.length}
          isVoting={isLoading}
          disabled={!user}
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
          <Box>@{post.owner.username}</Box> |
          <SmallLink to={`/posts/${post.slug}-${post.id}`}>
            {post.comments.length} yorum
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
