import { Button } from "@kampus/ui-next/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button text",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      control: { type: "select" },
      defaultValue: "default",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
      defaultValue: "sm",
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    size: "default",
  },
} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;
