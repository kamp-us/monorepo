import { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@kampus/ui-next";

const meta = {
  title: "TextArea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
