import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "@kampus/ui";

const meta = {
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    size: 32,
  },
  render: ({ size }) => <Loading size={size} />,
} satisfies Story;
