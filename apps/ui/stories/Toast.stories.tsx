"use client";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ToastAction, Toaster, useToast } from "@kampus/ui-next";

const meta = {
  title: "Toast",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
    title: "Show Toast",
    children: {
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: "Try again",
    },
  },
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: args.children.variant,
            title: args.children.title,
            description: args.children.description,
            action: <ToastAction altText="Try again">{args.children.action}</ToastAction>,
          });
        }}
      >
        {args.title}
      </Button>
    );
  },
} satisfies Story;
