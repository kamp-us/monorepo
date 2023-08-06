"use client";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Toast, ToastAction, Toaster, useToast } from "@kampus/ui-next";

const meta = {
  title: "Toast",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default = {
    render: () => {
      const { toast } = useToast();
  
      return (
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
      );
    },
  } satisfies Story;
  
