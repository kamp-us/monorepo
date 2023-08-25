import { graphql, useFragment, usePaginationFragment } from "react-relay";

import { Separator } from "@kampus/ui";

import { SinglePostFeed_comments$key } from "./__generated__/SinglePostFeed_comments.graphql";
import { SinglePostFeed_post$key } from "./__generated__/SinglePostFeed_post.graphql";
import { SinglePostFeed_viewer$key } from "./__generated__/SinglePostFeed_viewer.graphql";
import { CreatePanoCommentForm } from "./CreatePostCommentForm";
import { CommentItem } from "./features/comment-list/CommentItem";
import { PostItem } from "./features/post-list/PostItem";

interface SinglePostFeedProps {
  post: SinglePostFeed_post$key;
  viewer: SinglePostFeed_viewer$key;
  comments: SinglePostFeed_comments$key;
}

const fragment = graphql`
  fragment SinglePostFeed_comments on PanoPost
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SinglePostFeedPaginationQuery") {
    comments(first: $first, after: $after, last: $last, before: $before)
      @connection(key: "SinglePostFeedFragment__comments") {
      __id
      edges {
        node {
          id
          content
          createdAt
          owner {
            displayName
          }
          ...CommentItem_comment
        }
      }
    }
  }
`;

const postFragment = graphql`
  fragment SinglePostFeed_post on PanoPost {
    ...PostItem_post
  }
`;

const viewerFragment = graphql`
  fragment SinglePostFeed_viewer on Viewer {
    ...PostItem_viewer
    ...CommentItem_viewer
    ...CreatePostCommentForm_viewer
  }
`;

export const SinglePostFeed = (props: SinglePostFeedProps) => {
  const post = useFragment(postFragment, props.post);
  const viewer = useFragment(viewerFragment, props.viewer);
  const { data } = usePaginationFragment(fragment, props.comments);

  const comments = data.comments;

  return (
    <div className="flex flex-col gap-4">
      <PostItem post={post} showContent viewerRef={viewer} />
      <Separator />
      <CreatePanoCommentForm viewer={viewer} connectionID={comments?.__id} />
      <h2>Yorumlar</h2>
      {comments?.edges?.map((edge) => {
        if (!edge?.node) return null;
        return (
          <CommentItem
            key={edge.node.id}
            comment={edge.node}
            viewerRef={viewer}
            connectionID={comments.__id}
          />
        );
      })}
    </div>
  );
};
