import type { Meta, StoryObj } from "@storybook/react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@kampus/ui";

const meta = {
  title: "Alert Dialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Show Toast",
    children: {
      label: "destructive", //hata var ama çalışıyor
      description: "Uh oh! Something went wrong.",
      cancel: "There was a problem with your request.",
      action: "Try again",
    },
  },
  render: (args: any) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{args.title}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{args.children.label}</AlertDialogTitle>
          <AlertDialogDescription>
          {args.children.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{args.children.cancel}</AlertDialogCancel>
          <AlertDialogAction>{args.children.action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
} satisfies Story;
