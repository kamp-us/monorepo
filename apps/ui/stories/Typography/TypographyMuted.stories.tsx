import type { Meta, StoryObj } from "@storybook/react";

import { TypographyLarge, TypographyMuted } from "@kampus/ui-next";

const meta = {
  component: TypographyMuted,
  title: "Typography/Muted",
  args: {
    children: "Typography Muted",
  },
} satisfies Meta<typeof TypographyMuted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyMuted>{args.children}</TypographyMuted>,
} satisfies Story;
