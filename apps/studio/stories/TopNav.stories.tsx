import { type Meta, type StoryObj } from "@storybook/react";

import { TopNav, TopNavBrand, TopNavItem } from "@kampus/ui";

const meta = {
  title: "TopNav Menu",
  component: TopNav,
  tags: ["autodocs"],
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <TopNav>
      <TopNavBrand>@kampus/ui</TopNavBrand>
      <TopNavItem>sozluk</TopNavItem>
      <TopNavItem>pano</TopNavItem>
      <TopNavItem>mecmua</TopNavItem>
      <TopNavItem>gql</TopNavItem>
      <TopNavItem asChild>
        <a href="#create-kampus-app">create-kampus-app</a>
      </TopNavItem>
    </TopNav>
  ),
} satisfies Story;

const graphNode7 = {
  value: 7,
};

const graphNode9 = {
  value: 9,
};

const graphNode5 = {
  value: 5,
  right: graphNode9,
};

const graphNode2 = {
  value: 2,
  left: graphNode7,
  right: graphNode5,
};

graphNode2.right.right === graphNode9;
