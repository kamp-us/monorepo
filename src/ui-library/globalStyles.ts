import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  body: {
    fontFamily: "system-ui, sans-serif",
    background: "$gray1",
  },
});
