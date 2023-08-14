import type { Meta, StoryObj } from "@storybook/react";

import { TypographyP } from "@kampus/ui";

const meta = {
  component: TypographyP,
  title: "Typography/P",
  args: {
    children: "Typography P",
  },
} satisfies Meta<typeof TypographyP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyP>{args.children}</TypographyP>,
} satisfies Story;
