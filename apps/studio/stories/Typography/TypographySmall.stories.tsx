import type { Meta, StoryObj } from "@storybook/react";

import { TypographySmall } from "@kampus/ui";

const meta = {
  component: TypographySmall,
  title: "Typography/Small",
  args: {
    children: "Typography Small",
  },
} satisfies Meta<typeof TypographySmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographySmall>{args.children}</TypographySmall>,
} satisfies Story;
