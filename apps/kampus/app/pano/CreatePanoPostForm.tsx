"use client";

import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { graphql, useMutation } from "react-relay";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage, useForm } from "@kampus/ui";

const mutation = graphql`
  mutation CreatePanoPostFormMutation(
    $title: String!
    $content: String
    $url: String
    $connections: [ID!]!
  ) {
    createPanoPost(input: { url: $url, title: $title, content: $content }) {
      edge @prependEdge(connections: $connections) {
        cursor
        node {
          ...PostItem_post
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

const formSchema = z.object({
  title: z.string().min(5, { message: "Başlık en az 5 karakterden oluşmalıdır" }),
  url: z.string().url({ message: "URL duzgun degil" }),
  content: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  connectionID?: string;
  onCompleted?: () => void;
}

export function CreatePanoPostForm(props: Props) {
  const [commit, isInFlight] = useMutation(mutation);

  const form = useForm(formSchema, {
    defaultValues: {
      title: "",
      url: "",
      content: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    commit({
      variables: {
        title: values.title,
        url: values.url,
        content: values.content,
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

  const onCancel = () => {
    props.onCompleted?.();
  };

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="url"
          render={(props) => (
            <FormItem>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  URL
                </Text>
                <FormControl>
                  <TextField.Input placeholder="https://ornek.com" {...props.field} />
                </FormControl>
              </label>
              <Text asChild color="red">
                <FormMessage />
              </Text>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={(props) => (
            <FormItem>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Başlık
                </Text>
                <FormControl>
                  <TextField.Input placeholder="Ornek baslik" {...props.field} />
                </FormControl>
              </label>
              <Text asChild color="red">
                <FormMessage />
              </Text>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={(props) => (
            <FormItem>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Icerik
                </Text>
                <FormControl>
                  <TextArea placeholder="Eklemek istediklerin ..." {...props.field} />
                </FormControl>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
        <Flex justify="end" gap="2">
          <Button onClick={onCancel} variant="soft" type="reset" color="gray">
            Iptal
          </Button>
          <Button type="submit" disabled={isInFlight}>
            Gonder
          </Button>
        </Flex>
      </form>
    </Form>
  );
}
