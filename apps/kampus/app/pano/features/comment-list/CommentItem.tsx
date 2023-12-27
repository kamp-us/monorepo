"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { graphql, useFragment } from "react-relay";

import { TimeAgo } from "~/../../packages/ui";
import { UpdateCommentForm } from "../../UpdateCommentForm";
import { type CommentItem_comment$key } from "./__generated__/CommentItem_comment.graphql";
import { type CommentItem_viewer$key } from "./__generated__/CommentItem_viewer.graphql";
import { CommentMoreOptions } from "./CommentMoreOptions";
import { CommentUpvoteButton } from "./CommentUpvoteButton";

interface Props {
  comment: CommentItem_comment$key;
  viewerRef: CommentItem_viewer$key;
  connectionID?: string;
}

const commentsFragment = graphql`
  fragment CommentItem_comment on PanoComment {
    __id
    id
    content
    createdAt
    owner {
      displayName
    }
    commentCount

    post @required(action: LOG) {
      id
    }

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

  const comment = useFragment(commentsFragment, props.comment);
  const viewer = useFragment(viewerFragment, props.viewerRef);

  if (!comment) {
    return null;
  }

  return (
    <Card
      id={`c_${comment.id}`}
      tabIndex={0}
      color={targetHash === `#c_${comment.id}` ? "amber" : undefined}
      variant={targetHash === `#c_${comment.id}` ? undefined : "ghost"}
    >
      <Flex direction="row" gap="4" align="center">
        <CommentUpvoteButton commentRef={comment} />
        <Box grow="1">
          <Text size="2" color="gray">
            @{comment.owner?.displayName}&nbsp;·&nbsp;
            <Link href={`/pano/post/${comment.post?.id}/#c_${comment.id}`}>
              <TimeAgo date={new Date(comment.createdAt as string)} />
            </Link>
          </Text>

          <Box grow="1">
            {isEditing ? (
              <UpdateCommentForm
                connectionID={comment.__id}
                viewer={viewer}
                defaultValue={comment.content}
                setEditing={setEditing}
                commentID={comment.id}
              />
            ) : (
              <Text>{comment.content}</Text>
            )}
          </Box>
        </Box>

        {!isEditing && (
          <CommentMoreOptions
            comment={comment}
            viewerRef={viewer}
            setEditOpen={setEditing}
            commentConnectionID={props.connectionID}
          />
        )}
      </Flex>
    </Card>
  );
};
