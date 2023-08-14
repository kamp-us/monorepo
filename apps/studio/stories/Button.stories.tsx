import type { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail } from "lucide-react";

import { Button } from "@kampus/ui/components/button";

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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    variant: "default",
  },
} satisfies Story;

export const Secondary = {
  args: {
    variant: "secondary",
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: "destructive",
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: "outline",
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: "ghost",
  },
} satisfies Story;

export const Link = {
  args: {
    variant: "link",
  },
} satisfies Story;

export const WithIcon = {
  render: ({ children, ...props }) => (
    <Button {...props}>
      <Mail className="mr-2 h-4 w-4" />
      {children}
    </Button>
  ),
} satisfies Story;

export const Loading = {
  args: {
    disabled: true,
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  ),
} satisfies Story;

export const AsChild = {
  args: {
    asChild: true,
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <a href="javascript:;">{children}</a>
    </Button>
  ),
} satisfies Story;
