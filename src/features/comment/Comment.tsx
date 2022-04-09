import { FC, useState } from "react";
import {
  Comment,
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from "../../API";
import { createComment } from "../../graphql/mutations";
import { GQLOperation } from "../utils/amplify/GQLOperation";

type CommentProps = {
  comment: Comment;
  postID: string;
  username: string;
  comments: Comment[];
  allComments: Record<string, { comment: Comment; comments: Comment[] }>;
  refetch: () => void;
};

export const CommentItem: FC<CommentProps> = ({
  comment,
  postID,
  username,
  comments,
  allComments,
  refetch,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const addComment = async (commentID: string) => {
    try {
      if (!message) return;

      const variables = {
        input: {
          content: message,
          parentID: commentID,
          owner: username,
          postID: postID as string,
        },
      };

      await GQLOperation<CreateCommentMutation, CreateCommentMutationVariables>(
        createComment,
        variables
      );
      refetch();
      setOpen(false);
    } catch (e) {
      console.log("error adding comment", e);
    }
  };

  return (
    <div>
      <p>{comment.content}</p>
      <button onClick={() => setOpen(!open)}>reply</button>
      {open && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea onChange={(event) => setMessage(event.target.value)} />
          <button onClick={() => addComment(comment.id)}>add comment</button>
        </div>
      )}
      <div style={{ paddingLeft: 30 }}>
        {comments?.map((c) => {
          return (
            <CommentItem
              key={c.id}
              comment={c}
              username={username}
              comments={allComments[c.id]?.comments ?? []}
              postID={postID}
              allComments={allComments}
              refetch={refetch}
            />
          );
        })}
      </div>
    </div>
  );
};
