import type { Meta, StoryObj } from "@storybook/react";

import { TypographyList } from "@kampus/ui";

const meta = {
  component: TypographyList,
  title: "Typography/List",
  args: {
    children: "Typography List",
  },
} satisfies Meta<typeof TypographyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <TypographyList>
      <li>Kamp.us/Pano</li> <li>Kamp.us/Sozluk</li> <li>Kamp.us/Pasaport</li>
    </TypographyList>
  ),
} satisfies Story;
