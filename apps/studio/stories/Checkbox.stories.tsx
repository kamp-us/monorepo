import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, Label } from "@kampus/ui";

const labels = ["köpekleri çıkarmak", "alışverişe gitmek", "kitap okumak"];

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type NewType = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <div className="flex flex-col space-y-2 ">
      <h4>Günlük Yapmam Gerekenler</h4>
      {labels.map((label) => {
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id={label} />
            <Label
              htmlFor={label}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </Label>
          </div>
        );
      })}
    </div>
  ),
};
