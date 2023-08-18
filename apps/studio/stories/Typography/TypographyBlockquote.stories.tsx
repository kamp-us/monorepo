import type { Meta, StoryObj } from "@storybook/react";

import { TypographyBlockquote } from "@kampus/ui";

const meta = {
  component: TypographyBlockquote,
  title: "Typography/Blockquote",
  args: {
    children: "Typography Blockquote",
  },
} satisfies Meta<typeof TypographyBlockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyBlockquote>{args.children}</TypographyBlockquote>,
} satisfies Story;
