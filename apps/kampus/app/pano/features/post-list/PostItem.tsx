"use client";

import NextLink from "next/link";
import { graphql, useFragment } from "react-relay";

import { cn } from "@kampus/ui-next/utils";

import { TimeAgo } from "~/../../packages/ui";
import { type PostItem_post$key } from "./__generated__/PostItem_post.graphql";
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

        ...PostUpvoteButton_post

        owner @required(action: LOG) {
          displayName @required(action: LOG)
        }
        ...MoreOptions_post
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
      <UpvoteButton postRef={post} />

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
          <div>@{post.owner.displayName} |</div>
          <div>
            <Link href={`/pano/post/${post.id}`}>0 yorum</Link> |
          </div>
          <TimeAgo date={new Date(post.createdAt as string)} />
          <MoreOptionsDropdown key={post.id} post={post} />
        </div>
      </div>
    </section>
  );
};
