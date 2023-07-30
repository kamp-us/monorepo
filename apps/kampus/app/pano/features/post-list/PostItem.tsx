import NextLink from "next/link";

import { cn } from "@kampus/ui-next/utils";

import { MoreOptionsDropdown } from "./MoreOptions";
import { UpvoteButton } from "./PostUpvoteButton";

type Post = {
  __typename?: "PanoPost";
  content: string;
  createdAt: string;
  id: string;
  owner: string;
  title: string;
  url: string;
};

type PostItemProps = {
  post: Post;
  showContent?: boolean;
};

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
export const PostItem = (props: PostItemProps) => {
  return (
    <div className="mr-1 flex h-full gap-1 border-l-2">
      <div className="ml-1 flex h-full">
        <UpvoteButton upvoteCount={5} isUpvoted={false} disabled={false} isVoting={false} />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex items-center gap-1 align-baseline">
          <Link title={props.post.title} href={props.post.url} />
          <Link className="text-sm" title="wow.sh" href={props.post.url} />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <div>@{props.post.owner} |</div>
          <div>{<Link title="0 yorum" href={`/pano/post/${props.post.id}/`} />} |</div>
          <div>{props.post.createdAt} |</div>
          <MoreOptionsDropdown post={props.post} shareUrl={props.post.url} />
        </div>
      </div>
    </div>
  );
};
