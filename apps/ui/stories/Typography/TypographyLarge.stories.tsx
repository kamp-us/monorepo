import type { Meta, StoryObj } from "@storybook/react";

import { TypographyLarge } from "@kampus/ui-next";

const meta = {
  component: TypographyLarge,
  title: "Typography/Large",
  args: {
    children: "Typography Large",
  },
} satisfies Meta<typeof TypographyLarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        children: "Kamp.us",
      },
      render: (args) => <TypographyLarge>{args.children}</TypographyLarge>,
} satisfies Story;
