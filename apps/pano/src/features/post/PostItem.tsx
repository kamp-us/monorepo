import { Box, ExternalLink, GappedBox, SmallLink, Text } from "@kampus/ui";
import { useFetcher } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import { useUserContext } from "../auth/user-context";
import { UpvoteButton } from "../upvote/UpvoteButton";
import { MoreOptionsDropdown } from "~/features/post/MoreOptionsDropdown";
import type { Post } from "~/models/post.server";

type PostItemProps = {
  post: Post;
  showContent?: boolean;
};

const getVariables = (
  type: "create" | "delete",
  input: { postID: string; userID: string }
) => {
  return { type, input };
};

export const PostItem: FC<PostItemProps> = ({ post, showContent = false }) => {
  const user = useUserContext();
  const fetcher = useFetcher();
  const isLoading = !!fetcher.submission;
  const hasContent = !!post.content;
  const isContentVisible = hasContent && showContent;

  const isUpvoted =
    user && post ? post.upvotes.some((u) => u.userID === user.id) : false;

  const variables = user
    ? isUpvoted
      ? getVariables("delete", { postID: post.id, userID: user.id })
      : getVariables("create", { postID: post.id, userID: user.id })
    : null;

  const titleLink = post.url ? (
    <ExternalLink href={normalizeUrl(post.url)}>{post.title}</ExternalLink>
  ) : (
    <SmallLink to={`/posts/${post.slug}-${post.id}`}>{post.title}</SmallLink>
  );

  return (
    <GappedBox css={{ flexDirection: "column" }}>
      <GappedBox>
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
          <GappedBox css={{ alignItems: "baseline" }}>
            {titleLink}
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
            <>
              | <MoreOptionsDropdown post={post} />
            </>
          </GappedBox>
          {isContentVisible && (
            <GappedBox
              css={{
                marginTop: 8,
                padding: 8,
                borderRadius: 4,
                border: "1px solid $gray7",
                backgroundColor: "$gray3",
              }}
            >
              <Text
                size="3"
                lineHeight="2"
                css={{ color: "$gray12", whiteSpace: "break-spaces" }}
              >
                {post.content}
              </Text>
            </GappedBox>
          )}
        </GappedBox>
      </GappedBox>
    </GappedBox>
  );
};
