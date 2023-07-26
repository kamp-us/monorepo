import { type Dictionary } from "@kampus/std/dictionary";

export interface ConnectionArguments {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

export interface Connection<
  TNode extends Dictionary,
  TEdge extends ConnectionEdge<TNode> = ConnectionEdge<TNode>
> {
  nodes: TNode[];
  edges: TEdge[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface ConnectionEdge<T> {
  cursor: string;
  node: T;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
}
