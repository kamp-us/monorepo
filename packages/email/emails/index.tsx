import { z } from "zod";

import { MagicLink, magicLinkSchema } from "./MagicLink";

export const kampusEmailSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("magic-link"), props: magicLinkSchema }),
]);

export type KampusEmailProps = z.infer<typeof kampusEmailSchema>;

export type KampusEmailType = KampusEmailProps["type"];

export const renderEmail = ({ type, props }: KampusEmailProps) => {
  switch (type) {
    case "magic-link":
      return <MagicLink url={props.url} />;
    default:
      throw new Error("can't happen");
  }
};
