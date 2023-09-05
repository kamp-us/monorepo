"use client";

import { type ReactNode } from "react";
import NextLink from "next/link";
import { ExternalLinkIcon, MessageCircle } from "lucide-react";
import { graphql, useFragment } from "react-relay";

import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  TimeAgo,
} from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

import { UserAvatar } from "~/features/user-avatar/UserAvatar";
import { type PostItem_post$key } from "./__generated__/PostItem_post.graphql";
import { type PostItem_viewer$key } from "./__generated__/PostItem_viewer.graphql";
import { MoreOptionsDropdown } from "./MoreOptions";
import { UpvoteButton } from "./PostUpvoteButton";

interface LinkProps {
  href: string;
  children: ReactNode;
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

        owner @required(action: LOG) {
          displayName @required(action: LOG)
          ...UserAvatar_user
        }
        ...PostUpvoteButton_post
        ...MoreOptions_post

        recentComments: comments(last: 3) {
          nodes {
            owner {
              id
              ...UserAvatar_user
            }
          }
        }
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
    <Card className="flex overflow-clip">
      <div>
        <CardHeader>
          <div className="flex items-center gap-3 pb-4">
            <UserAvatar user={post.owner} />
            <div>
              <p className="text-sm font-medium leading-none">{post.owner.displayName}</p>
              <CardDescription>
                <TimeAgo date={post.createdAt as string} />
              </CardDescription>
            </div>
          </div>
          <CardTitle className="flex">
            <div className="flex items-center gap-1.5">
              <Link className="font-semibold" href={post.url ?? ""}>
                {post.title}
              </Link>
              <ExternalLinkIcon size={12} />
            </div>
          </CardTitle>
          <CardDescription>
            <Link className="text-sm" href={post.site ? "/site/" + post.site : ""}>
              {post.site ?? ""}
            </Link>
          </CardDescription>
        </CardHeader>
        <CardFooter className="gap-1.5">
          <UpvoteButton postRef={post} />
          <div className="flex items-center gap-1 font-semibold">
            <Button asChild variant="secondary" className="flex gap-1.5" size="sm">
              <Link href={`/post/${post.id}`}>
                <MessageCircle size="16" />
                <div className="text-center font-semibold">{post.commentCount ?? 0}</div>
              </Link>
            </Button>
          </div>
          <MoreOptionsDropdown
            key={post.id}
            post={post}
            viewerRef={viewer}
            postConnectionID={props.postConnectionId}
          />
        </CardFooter>
      </div>
    </Card>
  );
};
