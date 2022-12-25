import { Orientation } from "./constants";
import { createNode } from "./createNode";
import { createTree } from "./createTree";
import { getAt } from "./getAt";

const tree = createTree(
  createNode({
    meta: { id: "root" },
    orientation: Orientation.Vertical,
    children: [
      createNode({ meta: { id: 0 } }),
      createNode({
        meta: { id: "parent-0" },
        orientation: Orientation.Horizontal,
        children: [
          createNode({ meta: { id: 1 } }),
          createNode({ meta: { id: 2 } }),
          createNode({ meta: { id: 3 } }),
        ],
      }),
      createNode({ meta: { id: 4 } }),
      createNode({ meta: { id: 5 } }),
    ],
  }),
);

describe("getAt", () => {
  it("returns the node at given index", () => {
    const node = getAt<{ id: number }>(tree, 0);
    expect(node?.meta.id).toEqual(0);
  });

  it("returns null when not found", () => {
    const node = getAt(tree, 10);
    expect(node).toEqual(null);
  });
});
