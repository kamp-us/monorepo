import type { Node } from "@kampus/layout-tree";
import {
  createNode,
  createTree,
  NodeType,
  Orientation,
} from "@kampus/layout-tree";
import { Box, CenteredContainer, styled } from "@kampus/ui";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { FC } from "react";
import { Fragment, useContext } from "react";
import { useEffect, useState } from "react";
import {
  Panel as OriginalPanel,
  PanelContext,
  PanelResizeHandle,
} from "react-resizable-panels";
import { TwitchClip } from "react-twitch-embed";
import { AutoSizedPanelGroup } from "~/features/layout-tree/resizer.client";
import { PostList } from "~/features/post/PostList";
import type { PostWithCommentCount } from "~/models/post.server";
import { getAllPosts } from "~/models/post.server";

const Foo = () => (
  <Box css={{ backgroundColor: "red", flex: "1 1 auto", height: "100%" }}>
    Foo
  </Box>
);

const tree = createTree(
  createNode({
    meta: { id: "root" },
    orientation: Orientation.Vertical,
    children: [
      createNode({
        meta: {
          id: 0,
          element: (data: LoaderData["data"]) => (
            <Box css={{ padding: "$2" }}>
              <PostList posts={data} />
            </Box>
          ),
        },
      }),
      createNode({
        meta: { id: "parent-0" },
        orientation: Orientation.Horizontal,
        children: [
          createNode({
            meta: {
              id: 1,
              element: () => (
                <TwitchClip
                  autoplay={false}
                  clip="AdventurousBusyWormTwitchRaid-7vDEE8L5ur9j9dzi"
                  width="100%"
                />
              ),
            },
          }),
          createNode({ meta: { id: 2 } }),
          createNode({ meta: { id: 3 } }),
        ],
      }),
      createNode({ meta: { id: 4 } }),
      createNode({
        meta: { id: "parent-1" },
        orientation: Orientation.Horizontal,
        children: [
          createNode({ meta: { id: 41 } }),
          createNode({
            meta: {
              id: 42,
              element: (data: LoaderData["data"]) => <PostList posts={data} />,
            },
          }),
          createNode({ meta: { id: 43 } }),
        ],
      }),
      createNode({ meta: { id: 5 } }),
    ],
  })
);

const Handle = styled(PanelResizeHandle, {
  flex: "0 0 1em",
  position: "relative",
  outline: "none",
});

const HandleInner = styled(Box, {
  position: "absolute",
  top: "0.25em",
  bottom: "0.25em",
  left: "0.25em",
  right: "0.25em",
  borderRadius: "0.25em",
  backgroundColor: "transparent",
  transition: "background-color 0.2s linear",
});

const ResizeHandle = ({ id }: { id: string }) => {
  const { activeHandleId } = useContext(PanelContext);
  const isDragging = activeHandleId === id;

  return (
    <Handle id={id}>
      <HandleInner
        css={{
          backgroundColor: isDragging ? "$amber2" : "transparent",
        }}
      />
    </Handle>
  );
};

const PanelContent = styled(Box, {
  flex: "1 auto",
  display: "flex",
  backgroundColor: "rgba(255, 255, 255, .05)",
  boxSizing: "border-box",
  border: "1px solid black",
  justifyContent: "center",
  alignItems: "center",
});

const Panel = styled(OriginalPanel, { display: "flex", gap: 10 });

const LayoutPanelGroup: FC<{
  parent: Node<{ id: number }>;
  data: LoaderData["data"];
}> = ({ parent, data }) => {
  return (
    <AutoSizedPanelGroup
      autoSaveId={parent.meta.id.toString()}
      direction={
        parent.orientation === Orientation.Horizontal
          ? "vertical"
          : "horizontal"
      }
    >
      {parent.children.map((node, index) => {
        const n = node as Node<{
          id: number;
          element?: (data: LoaderData["data"]) => JSX.Element;
        }>;
        if (n.type === NodeType.Parent) {
          return (
            <Fragment key={n.meta.id}>
              <Panel id={n.meta.id.toString()}>
                <LayoutPanelGroup data={data} key={n.meta.id} parent={n} />
              </Panel>
            </Fragment>
          );
        }

        return (
          <Panel
            key={n.meta.id}
            id={n.meta.id.toString()}
            css={{
              flexDirection:
                parent.orientation === Orientation.Horizontal
                  ? "column"
                  : "row",
            }}
          >
            {index > 0 &&
              parent.children[index - 1].type === NodeType.Parent && (
                <ResizeHandle
                  id={`handle-${parent.children[index - 1].meta.id}`}
                />
              )}
            {n.meta.element ? (
              n.meta.element(data)
            ) : (
              <PanelContent>{n.meta.id}</PanelContent>
            )}
            {index !== parent.children.length - 1 && (
              <ResizeHandle id={`handle-${n.meta.id}`} />
            )}
          </Panel>
        );
      })}
    </AutoSizedPanelGroup>
  );
};

type LoaderData = {
  data: PostWithCommentCount[];
};

export const loader: LoaderFunction = async () => {
  const allPosts = await getAllPosts();
  return json<LoaderData>({
    data: allPosts,
  });
};

const Magic: FC = () => {
  const { data } = useLoaderData();
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) {
    return null;
  }

  return (
    <Box css={{ position: "absolute", top: 56, left: 0, right: 0, bottom: 0 }}>
      <LayoutPanelGroup data={data} parent={tree.root as any} />
    </Box>
  );
};

export default Magic;
