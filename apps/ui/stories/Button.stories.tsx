import { Button } from "@kampus/ui-next/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail } from "lucide-react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button text",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
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
  render: ({ children, ...props }) => (
    <Button {...props}>
      <Mail className="mr-2 h-4 w-4" />
      {children}
    </Button>
  ),
};

export const Loading: Story = {
  args: {
    disabled: true,
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <a href="javascript:;">{children}</a>
    </Button>
  ),
};
