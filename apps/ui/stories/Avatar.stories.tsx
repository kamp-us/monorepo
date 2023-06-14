import { Avatar, AvatarFallback, AvatarImage } from "@kampus/ui-next/components/avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Avatar,
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/kamp-us.png" alt="@kampus" />
      <AvatarFallback>K</AvatarFallback>
    </Avatar>
  ),
};
