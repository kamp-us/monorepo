"use client";

import { useParams } from "next/navigation";
import { graphql, useFragment, useMutation } from "react-relay";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
  useForm,
} from "@kampus/ui";

import { CreatePostCommentForm_viewer$key } from "./__generated__/CreatePostCommentForm_viewer.graphql";

const mutation = graphql`
  mutation CreatePostCommentFormMutation(
    $content: String!
    $postID: String!
    $connections: [ID!]!
  ) {
    createPanoComment(input: { content: $content, postID: $postID }) {
      edge @prependEdge(connections: $connections) {
        cursor
        node {
          id
          content
          createdAt
          owner {
            displayName
          }
        }
      }
      error {
        ... on UserError {
          message
        }
      }
    }
  }
`;

const viewerFragment = graphql`
  fragment CreatePostCommentForm_viewer on Viewer {
    actor {
      displayName
    }
  }
`;

const formSchema = z.object({
  content: z.string().min(1, { message: "Yorum kısmı boş bırakılamaz." }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  viewer: CreatePostCommentForm_viewer$key;
  connectionID?: string;
  onCompleted?: () => void;
}

export function CreatePanoCommentForm(props: Props) {
  const [commit, isInFlight] = useMutation(mutation);
  const { id: postID } = useParams();
  const { actor } = useFragment(viewerFragment, props.viewer);

  const form = useForm(formSchema, {
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    commit({
      variables: {
        content: values.content,
        postID: decodeURIComponent(postID!),
        connections: [props.connectionID].filter(Boolean),
      },
      onError: (error) => {
        console.error(error);
      },
      onCompleted: () => {
        props.onCompleted?.();
      },
    });
  };

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={(props) => (
            <FormItem>
              <FormLabel>Senin yorumun</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    actor ? "Yorumunu buraya ekle..." : "Yorum yapmak için giriş yapmalısın."
                  }
                  className="max-h-64 resize-y"
                  disabled={!actor}
                  {...props.field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">
          <Button type="submit" disabled={isInFlight || !actor}>
            Gönder
          </Button>
        </div>
      </form>
    </Form>
  );
}
