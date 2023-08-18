import type { Meta, StoryObj } from "@storybook/react";

import { TypographyH3 } from "@kampus/ui";

const meta = {
  component: TypographyH3,
  title: "Typography/H3",
  args: {
    children: "Typography H3",
  },
} satisfies Meta<typeof TypographyH3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyH3>{args.children}</TypographyH3>,
} satisfies Story;
