import type { Meta, StoryObj } from "@storybook/react";

import { TypographyH4 } from "@kampus/ui-next";

const meta = {
  component: TypographyH4,
  title: "Typography/H4",
  args: {
    children: "Typography H4",
  },
} satisfies Meta<typeof TypographyH4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyH4>{args.children}</TypographyH4>,
} satisfies Story;
