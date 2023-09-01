import { graphql, useFragment, usePaginationFragment } from "react-relay";

import { Separator, TypographyH4, TypographyP } from "@kampus/ui";

import { type SinglePostFeed_post$key } from "./__generated__/SinglePostFeed_post.graphql";
import { type SinglePostFeed_viewer$key } from "./__generated__/SinglePostFeed_viewer.graphql";
import { CreatePostCommentForm } from "./CreatePostCommentForm";
import { CommentItem } from "./features/comment-list/CommentItem";
import { PostItem } from "./features/post-list/PostItem";

interface SinglePostFeedProps {
  viewer: SinglePostFeed_viewer$key;
  post: SinglePostFeed_post$key;
}

const fragment = graphql`
  fragment SinglePostFeed_post on PanoPost
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SinglePostFeedPaginationQuery") {
    ...PostItem_post
    commentCount
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

const viewerFragment = graphql`
  fragment SinglePostFeed_viewer on Viewer {
    ...PostItem_viewer
    ...CommentItem_viewer
    ...CreatePostCommentForm_viewer
  }
`;

export const SinglePostFeed = (props: SinglePostFeedProps) => {
  const viewer = useFragment(viewerFragment, props.viewer);
  const { data } = usePaginationFragment(fragment, props.post);

  const comments = data.comments;

  return (
    <div className="flex flex-col gap-4">
      <PostItem post={data} showContent viewerRef={viewer} />
      <Separator />
      <CreatePostCommentForm viewer={viewer} connectionID={comments?.__id} />
      <TypographyH4>Yorumlar</TypographyH4>
      {comments?.edges?.length === 0 && <TypographyP>Henüz yorum yapılmamış.</TypographyP>}
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
