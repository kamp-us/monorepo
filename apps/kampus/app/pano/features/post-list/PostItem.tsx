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
        id
        site

        owner {
          username
        }
      }
    `,
    key
  );

interface PostItemProps {
  post: PostItem_post$key;
  showContent?: boolean;
}

export const PostItem = (props: PostItemProps) => {
  const post = usePanoPostFragment(props.post);

  if (!post) {
    return null;
  }

  return (
    <section className="flex h-full items-center gap-2 rounded">
      <UpvoteButton upvoteCount={5} isUpvoted={false} disabled={false} isVoting={false} />

      <div className="flex w-full flex-col justify-center">
        <div className="flex items-center gap-1 align-baseline">
          <Link className="font-semibold" href={post.url ?? ""}>
            {post.title}
          </Link>
          <Link className="text-sm" href={post.url ?? ""}>
            {post.site ?? ""}
          </Link>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <div>@{post.owner?.username} |</div>
          <div>
            <Link href={`/pano/post/${post.id}`}>0 yorum</Link> |
          </div>
          <TimeAgo date={new Date(post.createdAt as string)} />
        </div>
      </div>
    </section>
  );
};
