import { Meta } from "@storybook/react";

import { Checkbox, Label } from "@kampus/ui-next";

const labels = ["Kamp.us/pano", "Kamp.us/pasaport", "Kamp.us/sozluk"];
const title = "Kamp.us"; // Varsayılan başlık

const meta: Meta = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

export const Default = (args: any) => (
  <div className="flex flex-col space-y-2 ">
    <h4>{args.title}</h4>
    {args.children.map((label: string) => (
      <div className="flex items-center space-x-2" key={label}>
        <Checkbox id={label} />
        <Label
          htmlFor={label}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      </div>
    ))}
  </div>
);

Default.args = {
  title: title,
  children: labels,
};
