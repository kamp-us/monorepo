"use client";

import React from "react";
import { Flex, IconButton, TextArea } from "@radix-ui/themes";
import { Check, X } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage, useForm } from "@kampus/ui";

import { type UpdateCommentForm_viewer$key } from "./__generated__/UpdateCommentForm_viewer.graphql";

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
      <Flex asChild direction="column" gap="2" width="100%">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={(p) => (
              <FormItem>
                <FormControl>
                  <TextArea
                    autoFocus
                    placeholder={
                      actor ? "Yorumunu buraya ekle..." : "Yorum yapmak için giriş yapmalısın."
                    }
                    disabled={!actor}
                    {...p.field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Flex gap="2" justify="start" direction="row-reverse">
            <IconButton disabled={isInFlight} variant="solid" type="submit">
              <Check size={16} />
            </IconButton>
            <IconButton
              variant="soft"
              color="gray"
              disabled={isInFlight}
              onClick={() => props.setEditing(false)}
            >
              <X size={16} />
            </IconButton>
          </Flex>
        </form>
      </Flex>
    </Form>
  );
}
