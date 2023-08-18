import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, Label } from "@kampus/ui-next";

const meta = {
  title: "Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type NewType = StoryObj<typeof meta>;

type Story = NewType;

// export const Default = {} satisfies Story;
export const Default = {
  args: {
    title: "Accept terms and conditions",
  },
  render: (args: any) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">{args.title}</Label>
      </div>
    </div>
  ),
};
