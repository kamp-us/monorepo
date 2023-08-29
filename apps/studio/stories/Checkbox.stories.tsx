import { Meta, StoryObj } from "@storybook/react";

import { Button, Checkbox, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, Label, toast, useForm, z } from "@kampus/ui";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";

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
    },
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultChecked = {
  args: {
    defaultChecked: true,
  },
} satisfies Story;

const OnFocusTemplate = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox"
          onFocus={() => {
            setIsFocused(true)
          }}
          {...props} />
        <Label
          htmlFor="checkbox"
          className="text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <span id="label">
            {isFocused ? "Focused" : "Default"}
          </span>
        </Label>
      </div>
    </div>
  )
}

export const OnFocus = {
  render: ({ ...props }) => <OnFocusTemplate {...props} />,
} satisfies Story;

const DefaultTemplate = ({ ...props }) => {
  return (

    <div className="items-center flex space-x-2">
      <Checkbox id="terms1" {...props} />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="terms1"
          className="text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props?.children
            ? props?.children
            : "Default"
          }
        </Label>
        {props?.description && (
          <p className="text-sm text-muted-foreground">
            {props?.description}
          </p>
        )}
        {props?.error && (
          <p className="text-sm text-muted-foreground text-red-500">
            {props?.error}
          </p>
        )}
      </div>
    </div >
  )
}

export const WithError = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    }
  },
  render: ({ ...props }) => (
    <DefaultTemplate {...props} error="This is an error" />
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
    <DefaultTemplate {...props} description="This is a description" />
  ),
} satisfies Story;

const FormComponent = ({ ...props }) => {
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
                <FormLabel className="text-primary">
                  Use different settings for my mobile devices
                </FormLabel>
                <FormDescription className="text-muted-foreground text-sm">
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

export const InsideForm = {
  render: ({ ...props }) => <FormComponent {...props} />
} satisfies Story;


export const Default = {
  args: {
    children: "Default"
  },
  render: (
    { ...props }
  ) => (
    <DefaultTemplate {...props} />
  )
} satisfies Story;
