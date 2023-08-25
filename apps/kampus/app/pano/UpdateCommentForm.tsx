"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
  useForm,
} from "@kampus/ui";

import { UpdateCommentForm_viewer$key } from "./__generated__/UpdateCommentForm_viewer.graphql";

const mutation = graphql`
  mutation UpdateCommentFormMutation($content: String!, $id: ID!) {
    updatePanoComment(input: { content: $content, id: $id }) {
      edge {
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
  fragment UpdateCommentForm_viewer on Viewer {
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
  viewer: UpdateCommentForm_viewer$key;
  connectionID?: string;
  onCompleted?: () => void;
  defaultValue: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  commentID: string;
}

export function UpdateCommentForm(props: Props) {
  const [commit, isInFlight] = useMutation(mutation);
  const { actor } = useFragment(viewerFragment, props.viewer);

  const form = useForm(formSchema, {
    defaultValues: {
      content: props.defaultValue,
    },
  });

  const onSubmit = (values: FormSchema) => {
    commit({
      variables: {
        content: values.content,
        id: props.commentID,
        connections: [props.connectionID].filter(Boolean),
      },
      onError: (error) => {
        console.error(error);
      },
      onCompleted: () => {
        props.onCompleted?.();
        props.setEditing(false);
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
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="destructive"
            disabled={isInFlight}
            onClick={() => props.setEditing(false)}
          >
            <X size={16} />
          </Button>
          <Button disabled={isInFlight} size="icon" type="submit">
            <Check size={16} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
