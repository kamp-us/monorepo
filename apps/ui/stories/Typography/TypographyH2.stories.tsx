import type { Meta, StoryObj } from "@storybook/react";

import { TypographyH2 } from "@kampus/ui-next";

const meta = {
  component: TypographyH2,
  title: "Typography/H2",
  args: {
    children: "Typography H2",
  },
} satisfies Meta<typeof TypographyH2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyH2>{args.children}</TypographyH2>,
} satisfies Story;
