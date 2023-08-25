import { Meta, StoryObj } from "@storybook/react";

import { Button, Checkbox, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, Label, toast, useForm, z } from "@kampus/ui";
import { zodResolver } from "@hookform/resolvers/zod"

const meta = {
  title: "Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    }
  },

} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChecked = {
  args: {
    defaultChecked: true,
  },
} satisfies Story;

export const OnFocus = {
  args: {
    onFocus: () => {
      const label = document.querySelector("#label");
      label!.innerHTML = "Focused";
    },
  },
  render: ({ ...props }) => (
    <div className="flex flex-col space-y-2 ">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox" {...props} />
        <Label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <span id="label">focus to trigger 'onFocus'</span>
        </Label>
      </div>
    </div>
  ),
} satisfies Story;

export const WithText = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    }
  },
  render: ({ ...props }) => (
    <div className="items-center flex space-x-2">
      <Checkbox id="terms1" {...props} />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="terms1"
        >
          Accept terms and conditions
        </Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
} satisfies Story;

export const InsideForm = {
  render: ({ ...props }) => {
    const FormSchema = z.object({
      mobile: z.boolean().default(false).optional(),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

    const form = useForm<z.infer<typeof FormSchema>>(
      FormSchema,
      {
        resolver: zodResolver(FormSchema),
        values: {
          mobile: props?.checked,
        }
      },
    )

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    {...props}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Use different settings for my mobile devices
                  </FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the mobile settings page.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  }
} satisfies Story;


export const Default = {
  args: {
    children: "Default"
  },
  render: (
    { children, ...props }
  ) => (
    <div className="flex flex-col space-y-2 ">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox" {...props} />
        <Label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {children}
        </Label>
      </div>
    </div>
  ),
} satisfies Story;
