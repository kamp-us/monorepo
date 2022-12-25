import type { Orientation } from "./constants";
import { Node, NodeType } from "./models/Node";

type CreateNodeArgs<T> = {
  meta: T;
  children?: Node[];
  orientation?: Orientation;
};

export const createNode = <T>({
  meta,
  children,
  orientation,
}: CreateNodeArgs<T>) => {
  const node = new Node<T>(
    orientation ? NodeType.Parent : NodeType.Node,
    meta,
    orientation
  );

  if (children) {
    node.attachChildren(children);
  }

  return node;
};
