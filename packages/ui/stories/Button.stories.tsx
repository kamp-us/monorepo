// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    onClick: () => alert("Clicked"),
    children: "Button",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  },
};
