import { ArrowBigUp } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";

import { Button } from "@kampus/ui";

import { type CommentUpvoteButton_comment$key } from "./__generated__/CommentUpvoteButton_comment.graphql";

interface Props {
  commentRef: CommentUpvoteButton_comment$key;
}

const fragment = graphql`
  fragment CommentUpvoteButton_comment on PanoComment {
    id
    isUpvotedByViewer
    upvoteCount
  }
`;

const createUpvoteMutation = graphql`
  mutation CommentUpvoteButtonCreateMutation($commentID: ID!) {
    createPanoUpvote(input: { id: $commentID }) {
      node {
        node {
          ...CommentUpvoteButton_comment
        }
      }
    }
  }
`;

const removeUpvoteMutation = graphql`
  mutation CommentUpvoteButtonRemoveMutation($commentID: ID!) {
    removePanoUpvote(input: { id: $commentID }) {
      node {
        node {
          ...CommentUpvoteButton_comment
        }
      }
    }
  }
`;

export const CommentUpvoteButton = (props: Props) => {
  const comment = useFragment(fragment, props.commentRef);

  const [createUpvote, isCreating] = useMutation(createUpvoteMutation);
  const [removeUpvote, isRemoving] = useMutation(removeUpvoteMutation);

  const disabled = isCreating || isRemoving;

  const onClick = () => {
    if (isCreating || isRemoving) {
      return;
    }

    if (comment.isUpvotedByViewer) {
      removeUpvote({ variables: { commentID: comment.id } });
    } else {
      createUpvote({ variables: { commentID: comment.id } });
    }
  };

  return (
    <>
      <Button onClick={onClick} disabled={disabled} variant="ghost" size="icon">
        <ArrowBigUp fill={comment.isUpvotedByViewer ? "currentColor" : "none"} size="24" />
      </Button>
      <div className="text-center font-semibold">{comment?.upvoteCount ?? 0}</div>
    </>
  );
};
