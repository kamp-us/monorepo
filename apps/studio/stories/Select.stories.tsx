import { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@kampus/ui";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type NewType = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Select a fruit",
    children: {
      item1: "Apple",
      item2: "Banana",
      item3: "Blueberry",
      item4: "Grapes",
      item5: "Pineapple",
    },
    label: "Fruits",
  },
  render: (args: any) => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={args.title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{args.label}</SelectLabel>
          <SelectItem value="apple">{args.children.item1}</SelectItem>
          <SelectItem value="banana">{args.children.item2}</SelectItem>
          <SelectItem value="blueberry">{args.children.item3}</SelectItem>
          <SelectItem value="grapes">{args.children.item4}</SelectItem>
          <SelectItem value="pineapple">{args.children.item5}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
