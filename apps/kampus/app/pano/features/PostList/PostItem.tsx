import { PanoLink } from "../Link";
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
export const PostItem = (props: PostItemProps) => {
  return (
    <div className="flex gap-1">
      <div className="flex items-center">
        <UpvoteButton upvoteCount={10} isUpvoted={false} disabled={false} isVoting={false} />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex gap-1 align-baseline">
          <PanoLink title={props.post.title} href={props.post.url} variant="external" />
          <PanoLink title="/wow.sh" href={props.post.url} />
        </div>
        <div className="flex">
          @{props.post.owner} | 0 yorum | {props.post.createdAt}
        </div>
      </div>
    </div>
  );
};
