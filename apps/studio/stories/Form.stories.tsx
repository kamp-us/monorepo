"use client";

import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  useForm,
  z,
} from "@kampus/ui-next";

// 1. create a form schema

const formSchema = z.object({
  title: z.string().min(1, { message: "baslik en az 1 karakterli" }),
  content: z.string().optional(),
});

const FormStory = () => {
  // create a form state helper using `useForm` hook
  const form = useForm(formSchema, {
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add new post</CardTitle>
        <CardDescription>Share your links & thoughts with us</CardDescription>
      </CardHeader>
      <Form {...form}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="What's your title?" {...field} />
                  </FormControl>
                  <FormDescription>Write a descriptive title for your post.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Add your thoughts ..." {...field} />
                  </FormControl>
                  <FormDescription>Add your thoughts about this post.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="space-x-2">
            <Button variant="outline" type="reset" onClick={() => form.reset()}>
              Reset form
            </Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export const Default = {
  render: () => {
    return (
      <>
        <FormStory />
      </>
    );
  },
} satisfies Story;

const meta = {
  title: "Form",
  component: FormStory,
} satisfies Meta<typeof FormStory>;

export default meta;

type Story = StoryObj<typeof meta>;
