"use client";

import NextLink from "next/link";
import { graphql, useFragment } from "react-relay";

import { cn } from "@kampus/ui-next/utils";

import { TimeAgo } from "~/../../packages/ui";
import { type PostItem_post$key } from "./__generated__/PostItem_post.graphql";
import { UpvoteButton } from "./PostUpvoteButton";

// import { MoreOptionsDropdown } from "./MoreOptions";

interface LinkProps {
  href: string;
  title: string;
  className?: string;
}

const Link = ({ href, title, className }: LinkProps) => {
  return (
    <NextLink className={cn("text-muted-foreground hover:underline", className)} href={href}>
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
        id

        owner {
          username
        }
      }
    `,
    key
  );

type PostItemProps = {
  post: PostItem_post$key;
  showContent?: boolean;
};

export const PostItem = (props: PostItemProps) => {
  const post = usePanoPostFragment(props.post);

  if (!post) {
    return null;
  }

  return (
    <div className="mr-1 flex h-full gap-1 border-l-2">
      <div className="ml-1 flex h-full">
        <UpvoteButton upvoteCount={5} isUpvoted={false} disabled={false} isVoting={false} />
      </div>
      <div className="flex w-full flex-col justify-center">
        <div className="flex items-center gap-1 align-baseline">
          <Link title={post.title} href={post.url ?? ""} />
          <Link className="text-sm" title={post.site ?? ""} href={post.url ?? ""} />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <div>@{post.owner?.username} |</div>
          <div>{<Link title="0 yorum" href={`/pano/post/${post.id}/`} />} |</div>
          <TimeAgo date={new Date(post.createdAt as string)} />
        </div>
      </div>
    </div>
  );
};
