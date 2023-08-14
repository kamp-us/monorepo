import type { Meta, StoryObj } from "@storybook/react";

import { UserAvatar } from "@kampus/ui";

const meta = {
  component: UserAvatar,
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: ({ login, src }) => <UserAvatar login={login} src={src} />,
  args: {
    login: "kampus",
    src: "https://github.com/kamp-us.png",
  },
} satisfies Story;
