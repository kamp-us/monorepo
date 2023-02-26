import { styled } from "~/stitches.config";
import * as RadixSeparator from "@radix-ui/react-separator";

export const Separator = styled(RadixSeparator.Root, {
  backgroundColor: "$gray6",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});
