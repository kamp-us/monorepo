import { Meta, StoryObj } from "@storybook/react";
import {
  CreditCard,
  Keyboard,
  MoreHorizontal,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@kampus/ui";

const meta = {
  title: "Dropdown Menu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Open",
    children: {
      label: "My Account",
      users1: "Profile",
      card: "Billing",
      settings: "Settings",
      keyboard: "Keyboard shortcuts",
      users2: "Team",
      userplus: "Invite users",
    },
  },
  render: (args: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{args.title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{args.children.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>{args.children.users1}</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>{args.children.card}</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>{args.children.settings}</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>{args.children.keyboard}</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>{args.children.users2}</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>{args.children.userplus}</span>
            </DropdownMenuSubTrigger>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Withicons = {
  args: {
    children: {
      item1: "Adresi kopyala",
      item2: "Düzenle",
      item3: "Sil",
    },
  },
  render: (args: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-5 p-1" variant="ghost">
          <MoreHorizontal size="16" aria-label="Daha fazla seçenek" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>{args.children.item1}</DropdownMenuItem>
        <DropdownMenuItem>{args.children.item2}</DropdownMenuItem>
        <DropdownMenuItem>{args.children.item3}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
