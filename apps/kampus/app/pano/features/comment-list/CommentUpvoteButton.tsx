import { ArrowBigUp } from "lucide-react";
import { graphql, useFragment } from "react-relay";

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

// const createUpvoteMutation = graphql`
//   mutation CommentUpvoteButtonCreateMutation($commentID: ID!) {
//     createPanoCommentUpvote(input: { id: $commentID }) {
//       node {
//         node {
//           ...CommentUpvoteButton_comment
//         }
//       }
//     }
//   }
// `;

// const removeUpvoteMutation = graphql`
//   mutation CommentUpvoteButtonRemoveMutation($commentID: ID!) {
//     removePanoCommentUpvote(input: { id: $commentID }) {
//       node {
//         node {
//           ...CommentUpvoteButton_comment
//         }
//       }
//     }
//   }
// `;

export const CommentUpvoteButton = (props: Props) => {
  const comment = useFragment(fragment, props.commentRef);
  const upvoteStyle = comment?.isUpvotedByViewer ? "fill-primary" : "fill-none";

  const disabled = false;
  const onClick = () => {
    console.log("DO UPVOTE MUTATION");
  };

  return (
    <>
      <Button onClick={onClick} disabled={disabled} variant="ghost" size="icon">
        <ArrowBigUp
          fill={comment.isUpvotedByViewer ? "currentColor" : "none"}
          className={upvoteStyle}
          size="24"
        />
      </Button>
      <div className="text-center font-semibold">{comment?.upvoteCount ?? 0}</div>
    </>
  );
};
