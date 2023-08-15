import type { Meta, StoryObj } from "@storybook/react";

import { TypographyLead } from "@kampus/ui";

const meta = {
  component: TypographyLead,
  title: "Typography/Lead",
  args: {
    children: "Typography Lead",
  },
} satisfies Meta<typeof TypographyLead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Kamp.us",
  },
  render: (args) => <TypographyLead>{args.children}</TypographyLead>,
} satisfies Story;
