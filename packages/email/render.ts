import { type KampusEmailProps } from "./emails";
import { MagicLink } from "./emails/MagicLink";

export const renderEmail = ({ type, props }: KampusEmailProps) => {
  switch (type) {
    case "magic-link":
      return MagicLink(props);
    default:
      throw new Error("can't happen");
  }
};
