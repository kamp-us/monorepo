import { type Dictionary } from "@kampus/std/dictionary";

export interface ConnectionArguments {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

export interface Connection<T extends Dictionary> {
  nodes: T[];
  edges: ConnectionEdge<T>[];
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
  startCursor: string | null;
  endCursor: string | null;
}
