"use client";

import NextLink from "next/link";
import { ExternalLinkIcon, MessageCircleIcon } from "lucide-react";
import { graphql, useFragment } from "react-relay";

import { Card, CardContent, CardFooter, CardTitle, TimeAgo, UserAvatar } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

import { getPostURL, getSitePostsURL } from "~/features/kampus-url/pano";
import { type PostItem_post$key } from "./__generated__/PostItem_post.graphql";
import { type PostItem_viewer$key } from "./__generated__/PostItem_viewer.graphql";
import { MoreOptionsDropdown } from "./MoreOptions";
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
    <Card className="flex flex-row items-center gap-6 p-6">
      <div className="flex flex-col gap-3 p-0">
        <UpvoteButton postRef={post} />
      </div>

      <CardContent className="flex flex-1 flex-col gap-2 p-0">
        <CardTitle className="flex gap-3">
          <div className="flex items-center gap-1.5">
            <Link className="font-semibold" href={post.url ?? ""}>
              {post.title}
            </Link>
            <ExternalLinkIcon size={12} />
          </div>

          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            {post.site && (
              <Link className="text-sm" href={getSitePostsURL({ site: post.site })}>
                {post.site}
              </Link>
            )}
          </div>
        </CardTitle>
        <div className="text-muted-foreground flex text-sm">
          <div>@{post.owner.displayName}</div>&nbsp;·&nbsp;
          <TimeAgo date={new Date(post.createdAt as string)} />
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 font-semibold">
            <MessageCircleIcon size="12" />
            <Link href={getPostURL(post)}>{`${post.commentCount} yorum`}</Link>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex h-full flex-col justify-between p-0">
        <div className="flex flex-1 flex-col">
          <MoreOptionsDropdown
            key={post.id}
            post={post}
            viewerRef={viewer}
            postConnectionID={props.postConnectionId}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
