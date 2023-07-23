import type { Meta, StoryObj } from "@storybook/react";

import {
  FacebookShare,
  RedditShare,
  TwitterShare,
} from "@kampus/ui-next/components/social-media-buttons";

const meta = {
  component: TwitterShare || FacebookShare || RedditShare,
} satisfies Meta<typeof TwitterShare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    postUrl: "https://kampus.rs",
    size: 32,
  },
  render: ({ postUrl, size }) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <FacebookShare postUrl={postUrl} size={size} />
      <TwitterShare postUrl={postUrl} size={size} />
      <RedditShare postUrl={postUrl} size={size} />
    </div>
  ),
} satisfies Story;
