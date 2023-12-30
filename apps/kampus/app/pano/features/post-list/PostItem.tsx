"use client";

import NextLink from "next/link";
import { ChatBubbleIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Heading, Text, Tooltip } from "@radix-ui/themes";
import { graphql, useFragment } from "react-relay";

import { TimeAgo } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

import { getPostURL } from "~/features/kampus-url/pano";
import { type PostItem_post$key } from "./__generated__/PostItem_post.graphql";
import { type PostItem_viewer$key } from "./__generated__/PostItem_viewer.graphql";
import { MoreOptionsDropdown } from "./MoreOptions";
import styles from "./PostItem.module.css";
import { UpvoteButton } from "./PostUpvoteButton";

interface LinkProps {
  href: string;
  children: string;
  className?: string;
}

const Link = ({ href, children: title, className }: LinkProps) => {
  return (
    <NextLink className={cn("hover:underline", className)} href={href}>
      {title}
    </NextLink>
  );
};

const usePanoPostFragment = (key: PostItem_post$key | null) =>
  useFragment(
    graphql`
      fragment PostItem_post on PanoPost {
        id
        title
        content
        url
        createdAt
        site
        commentCount @required(action: LOG)

        ...PostUpvoteButton_post

        owner @required(action: LOG) {
          displayName @required(action: LOG)
        }
        ...MoreOptions_post
      }
    `,
    key
  );

const usePanoViewerFragment = (key: PostItem_viewer$key | null) =>
  useFragment(
    graphql`
      fragment PostItem_viewer on Viewer {
        ...MoreOptions_viewer
        actor {
          displayName
        }
      }
    `,
    key
  );

interface PostItemProps {
  post: PostItem_post$key;
  viewerRef: PostItem_viewer$key;
  showContent?: boolean;
  postConnectionId?: string;
}

export const PostItem = (props: PostItemProps) => {
  const post = usePanoPostFragment(props.post);
  const viewer = usePanoViewerFragment(props.viewerRef);
  if (!post) {
    return null;
  }

  return (
    <Card>
      <Flex align="center" gap="2">
        <UpvoteButton postRef={post} />
        <Flex align="center" gap="1">
          <NextLink href={getPostURL(post)}>
            <Button variant="soft" size="1">
              <ChatBubbleIcon width="16" height="14" /> {`${post.commentCount}`}
            </Button>
          </NextLink>
        </Flex>
        <Tooltip content={post.site ?? ""}>
          <Heading as="h3" size="3" className={styles.PostItemTitle}>
            <Link href={post.url ?? ""}>{post.title}</Link>
          </Heading>
        </Tooltip>
        <ExternalLinkIcon style={{ flexShrink: 0 }} />
        <Flex grow="1" />
        <Text size="1" color="gray" style={{ flexShrink: 0 }}>
          @{post.owner.displayName} ·&nbsp;
          <TimeAgo date={new Date(post.createdAt as string)} />
        </Text>

        <MoreOptionsDropdown
          key={post.id}
          post={post}
          viewerRef={viewer}
          postConnectionID={props.postConnectionId}
        />
      </Flex>
    </Card>
  );
};
