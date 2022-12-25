import { Orientation } from "../constants";
import { Node, NodeType } from "./Node";

describe("Node", () => {
  it("works", () => {
    const node = new Node(NodeType.Node, { a: "b" }, Orientation.Vertical);

    expect(node.meta).toEqual({ a: "b" });
    expect(node.type).toEqual(NodeType.Node);
    expect(node.orientation).toEqual(Orientation.Vertical);
  });

  describe("setParent", () => {
    it("attaches itself to given parent", () => {
      const node = new Node(NodeType.Node, { a: "b" }, Orientation.Vertical);
      const parent = new Node(NodeType.Parent, {}, Orientation.Horizontal);

      node.setParent(parent);

      expect(node.parent).toEqual(parent);
    });
  });

  describe("clone", () => {
    it("clones given node", () => {
      const node = new Node(NodeType.Node, { a: "b" }, Orientation.Vertical);
      const cloned = node.clone();

      expect(node).toEqual(cloned);
    });
  });

  describe("attachChildren", () => {
    it("attaches children and set their parent", () => {
      const parent = new Node(NodeType.Node, { a: "b" }, Orientation.Vertical);

      parent.attachChildren([
        new Node(NodeType.Node, { id: 1 }),
        new Node(NodeType.Node, { id: 2 }),
      ]);

      expect((parent.children[0].meta as { id: number }).id).toBe(1);
      expect((parent.children[1].meta as { id: number }).id).toBe(2);
    });
  });

  describe("indexOf", () => {
    it("returns the index of given child", () => {
      const parent = new Node(NodeType.Node, { a: "b" }, Orientation.Vertical);

      const child_1 = new Node(NodeType.Node, { id: 1 });
      const child_2 = new Node(NodeType.Node, { id: 2 });

      parent.attachChildren([child_1, child_2]);

      expect(parent.indexOf(child_1)).toEqual(0);
      expect(parent.indexOf(child_2)).toEqual(1);
    });
  });
});
