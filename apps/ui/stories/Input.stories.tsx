import {Button} from "@kampus/ui-next/components/button";
import {Input} from "@kampus/ui-next/components/input";
import {Label} from "@kampus/ui-next/components/label";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    component: Input,
    tags: ["autodocs"],
    args: {
        disabled: false,
        placeholder: "Placeholder"
    }
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Disabled = {
    args: {
        disabled: true
    }
} satisfies Story

export const WithLabel = {
    args: {
        label: "Label"
    },
    render: ({placeholder, disabled, label}: { placeholder: string, disabled: boolean, label: string }) => (<div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>{label}</Label>
        <Input placeholder={placeholder} disabled={disabled}/>
    </div>)
} as Story


export const WithText = {
    args: {
        label: "Label",
        text: "Help text"
    },
    render: ({placeholder, disabled, label, text}: { placeholder: string, disabled: boolean, label: string, text: string }) => (<div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>{label}</Label>
        <Input placeholder={placeholder} disabled={disabled}/>
        <p className="text-sm text-muted-foreground">{text}</p>
    </div>)
} as Story

export const WithButton = {
    render: (props) => (<div className="flex w-full max-w-sm items-center space-x-2">
        <Input {...props}/>
        <Button disabled={props.disabled}>Subscribe</Button>
    </div>)
} satisfies Story