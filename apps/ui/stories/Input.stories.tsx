import type { Meta, StoryObj } from "@storybook/react";

import { Button, InputWithButton } from "@kampus/ui-next";
import { Input } from "@kampus/ui-next/components/input";
import { Label } from "@kampus/ui-next/components/label";

const meta = {
  component: Input,
  tags: ["autodocs"],
  args: {
    disabled: false,
    placeholder: "Placeholder",
  },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const WithLabel = {
  args: {
    label: "Label",
  },
  render: ({
    placeholder,
    disabled,
    label,
  }: {
    placeholder: string;
    disabled: boolean;
    label: string;
  }) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{label}</Label>
      <Input placeholder={placeholder} disabled={disabled} />
    </div>
  ),
} as Story;

export const WithText = {
  args: {
    label: "Label",
    text: "Help text",
  },
  render: ({
    placeholder,
    disabled,
    label,
    text,
  }: {
    placeholder: string;
    disabled: boolean;
    label: string;
    text: string;
  }) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{label}</Label>
      <Input placeholder={placeholder} disabled={disabled} />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  ),
} as Story;

export const WithButton: Story = {
  render: (props) => (
    <InputWithButton input={<Input {...props} />} button={<Button>Button</Button>} />
  ),
};
