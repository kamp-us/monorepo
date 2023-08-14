import { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@kampus/ui-next";

const meta = {
  title: "Seperator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Kamp.us Uygulamaları</h4>
        <p className="text-muted-foreground text-sm"></p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Pano</div>
        <Separator orientation="vertical" />
        <div>Sözlük</div>
        <Separator orientation="vertical" />
        <div>Pasaport</div>
      </div>
    </div>
  ),
};
