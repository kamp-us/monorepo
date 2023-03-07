import {
  Box,
  ExternalLink,
  GappedBox,
  InternalLink,
  SmallLink,
  Text,
  Timeago,
} from "@kampus/ui";
import type { SerializeFrom } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import { useUserContext } from "../auth/user-context";
import { UpvoteButton } from "../upvote/UpvoteButton";
import { MoreOptionsDropdown } from "~/features/post/MoreOptionsDropdown";
import type { PostWithCommentCount } from "~/models/post.server";
import { getPostLink, getSitePostsLink } from "~/utils";

type PostItemProps = {
  post: SerializeFrom<PostWithCommentCount>;
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
    <ExternalLink
      css={{
        wordBreak: "break-word",
        "--line-clamp": 3,
        lineHeight: "1.2",
        maxHeight: "calc(1.2em * var(--line-clamp))",
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "var(--line-clamp)",
        "-webkit-box-orient": "vertical",
      }}
      href={normalizeUrl(post.url)}
    >
      {post.title}
    </ExternalLink>
  ) : (
    <InternalLink
      to={getPostLink(post)}
      css={{
        wordBreak: "break-word",
        "--line-clamp": 3,
        lineHeight: "1.2",
        maxHeight: "calc(1.2em * var(--line-clamp))",
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "var(--line-clamp)",
        "-webkit-box-orient": "vertical",
      }}
    >
      {post.title}
    </InternalLink>
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
        <GappedBox css={{ flexDirection: "column", width: "100%" }}>
          <GappedBox css={{ alignItems: "baseline", flexWrap: "wrap" }}>
            {titleLink}
            {post.site && (
              <SmallLink
                to={getSitePostsLink(post)}
                css={{
                  wordBreak: "break-word",
                  "--line-clamp": 1,
                  lineHeight: "1.2",
                  maxHeight: "calc(1.2em * var(--line-clamp))",
                  overflow: "hidden",
                  display: "-webkit-box",
                  "-webkit-line-clamp": "var(--line-clamp)",
                  "-webkit-box-orient": "vertical",
                }}
              >
                {post.site}
              </SmallLink>
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
            <SmallLink to={getPostLink(post)}>
              {post._count.comments} yorum
            </SmallLink>
            |
            <Text size="1">
              <Timeago date={new Date(post.createdAt)} />
            </Text>
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
                wordBreak: "break-word",
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
