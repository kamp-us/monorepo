import { ArrowBigUp } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";

import { Button } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

import { type PostUpvoteButton_post$key } from "./__generated__/PostUpvoteButton_post.graphql";

const fragment = graphql`
  fragment PostUpvoteButton_post on PanoPost {
    id
    isUpvotedByViewer
    upvoteCount @required(action: LOG)
  }
`;

const createUpvoteMutation = graphql`
  mutation PostUpvoteButtonCreateMutation($postID: ID!) {
    createPanoUpvote(input: { id: $postID }) {
      node {
        node {
          ...PostUpvoteButton_post
        }
      }
    }
  }
`;

const removeUpvoteMutation = graphql`
  mutation PostUpvoteButtonRemoveMutation($postID: ID!) {
    removePanoUpvote(input: { id: $postID }) {
      node {
        node {
          ...PostUpvoteButton_post
        }
      }
    }
  }
`;

interface UpvoteProps {
  postRef: PostUpvoteButton_post$key;
}

export const UpvoteButton = (props: UpvoteProps) => {
  const post = useFragment(fragment, props.postRef);
  const [createUpvote, isCreating] = useMutation(createUpvoteMutation);
  const [removeUpvote, isRemoving] = useMutation(removeUpvoteMutation);

  if (!post) {
    return null;
  }

  const disabled = isCreating || isRemoving;

  const upvoteStyle = cn();

  const onClick = () => {
    if (!post) {
      return;
    }

    if (isCreating || isRemoving) {
      return;
    }

    if (post.isUpvotedByViewer) {
      removeUpvote({ variables: { postID: post.id } });
    } else {
      createUpvote({ variables: { postID: post.id } });
    }
  };

  return (
    <>
      <Button onClick={onClick} disabled={disabled} variant="ghost" size="icon">
        <ArrowBigUp
          fill={post.isUpvotedByViewer ? "currentColor" : "none"}
          className={upvoteStyle}
          size="24"
        />
      </Button>
      <div className="text-center font-semibold">{post?.upvoteCount ?? 0}</div>
    </>
  );
};
