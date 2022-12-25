import type { FC } from "react";
import { createElement } from "react";
import { PanelGroup } from "react-resizable-panels";
import AutoSizer from "react-virtualized-auto-sizer";
import type { AutoSizerProps, Size } from "react-virtualized-auto-sizer";

function withAutoSizer<ComponentProps>(
  Component: FC<ComponentProps>,
  autoSizerProps?: AutoSizerProps
): FC<Omit<ComponentProps, "height" | "width">> {
  const AutoSizerWrapper = (
    props: Omit<ComponentProps, "height" | "width">
  ) => {
    return createElement(AutoSizer, {
      ...autoSizerProps,
      children: ({ height, width }: Size) =>
        createElement(Component as any, { ...props, height, width }),
    });
  };

  return AutoSizerWrapper;
}

export const AutoSizedPanelGroup = withAutoSizer(PanelGroup);
