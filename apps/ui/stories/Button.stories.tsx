import { Button } from "@kampus/ui-next/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button text",
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "link",
  },
};
