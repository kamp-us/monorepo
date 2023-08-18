import type { Meta, StoryObj } from "@storybook/react";

import { TypographyInlineCode } from "@kampus/ui";

const meta = {
  component: TypographyInlineCode,
  title: "Typography/InlineCode",
  args: {
    children: "Typography Inline Code",
  },
} satisfies Meta<typeof TypographyInlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyInlineCode>{args.children}</TypographyInlineCode>,
} satisfies Story;
