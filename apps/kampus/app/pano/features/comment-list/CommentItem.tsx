"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { graphql, useFragment, usePaginationFragment } from "react-relay";

import { cn } from "@kampus/ui/utils";

import { Card, CardContent, TimeAgo } from "~/../../packages/ui";
import { UpdateCommentForm } from "../../UpdateCommentForm";
import { CommentItem_comment$key } from "./__generated__/CommentItem_comment.graphql";
import { CommentItem_viewer$key } from "./__generated__/CommentItem_viewer.graphql";
import { CommentMoreOptions } from "./CommentMoreOptions";
import { CommentUpvoteButton } from "./CommentUpvoteButton";

interface Props {
  comment: CommentItem_comment$key;
  viewerRef: CommentItem_viewer$key;
  connectionID?: string;
}

const commentsFragment = graphql`
  fragment CommentItem_comment on PanoComment
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "CommentItemPaginationQuery") {
    __id
    id
    content
    createdAt
    owner {
      username
    }
    commentCount
    ...CommentUpvoteButton_comment
    ...CommentMoreOptions_comment
  }
`;

const viewerFragment = graphql`
  fragment CommentItem_viewer on Viewer {
    actor {
      displayName
    }
    ...CommentMoreOptions_viewer
    ...UpdateCommentForm_viewer
  }
`;

export const CommentItem = (props: Props) => {
  const params = useParams();
  const [targetHash, setTargetHash] = useState<string>("");

  const [isEditing, setEditing] = useState(false);

  // explanation: https://github.com/vercel/next.js/discussions/49465#discussioncomment-5845312
  useEffect(() => {
    setTargetHash(window.location.hash);
  }, [params]);

  const hashStyles = "rounded-lg bg-amber-400 p-1";

  const { data: comment } = usePaginationFragment(commentsFragment, props.comment);
  const viewer = useFragment(viewerFragment, props.viewerRef);

  return (
    <div
      id={`c_${comment.id}`}
      tabIndex={0}
      className={cn("flex flex-col gap-4", {
        [hashStyles]: targetHash === `#c_${comment.id}`,
      })}
    >
      <Card className="flex flex-row p-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <CommentUpvoteButton commentRef={comment} />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <div className="text-muted-foreground flex flex-col p-0 text-sm">
              <div className="flex items-start gap-2 text-sm">
                <div className="text-muted-foreground flex text-sm">
                  <div>@{comment.owner?.username}&nbsp;·&nbsp;</div>
                  <TimeAgo date={new Date(comment.createdAt as string)} />
                </div>
                <CommentMoreOptions
                  comment={comment}
                  viewerRef={viewer}
                  setEditOpen={setEditing}
                  commentConnectionID={comment.__id}
                />
              </div>
            </div>
            <CardContent className="flex flex-col gap-2 p-0">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1 align-baseline">
                  {isEditing ? (
                    <div className="flex w-full flex-col gap-2">
                      <UpdateCommentForm
                        connectionID={comment.__id}
                        viewer={viewer}
                        defaultValue={comment.content}
                        setEditing={setEditing}
                        commentID={comment.id}
                      />
                    </div>
                  ) : (
                    <p>{comment.content}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
        <div className="flex flex-row gap-2 "></div>
      </Card>
    </div>
  );
};
