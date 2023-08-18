import type { Meta, StoryObj } from "@storybook/react";

import { TimeAgo } from "@kampus/ui/components/time-ago";

const meta = {
  component: TimeAgo,
  args: {
    date: new Date(),
  },
} satisfies Meta<typeof TimeAgo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
