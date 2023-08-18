import { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@kampus/ui";

const meta = {
  title: "Seperator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Kamp.us Uygulamaları",
    children: {
      item1: "Pano",
      item2: "Sözlük",
      item3: "Pasaport",
    },
  },
  render: (args: any) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">{args.title}</h4>
        <p className="text-muted-foreground text-sm"></p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>{args.children.item1}</div>
        <Separator orientation="vertical" />
        <div>{args.children.item2}</div>
        <Separator orientation="vertical" />
        <div>{args.children.item3}</div>
      </div>
    </div>
  ),
};
