import type { Meta, StoryObj } from "@storybook/react";

import { TypographyH1 } from "@kampus/ui";

const meta = {
  component: TypographyH1,
  title: "Typography/H1",
  args: {
    children: "Typography H1",
  },
} satisfies Meta<typeof TypographyH1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyH1>{args.children}</TypographyH1>,
} satisfies Story;
