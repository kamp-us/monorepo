import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";

import type { KampusGQLContext } from "./types";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
};

export type Node = {
  id: Scalars["ID"]["output"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor: Maybe<Scalars["String"]["output"]>;
};

export type PanoPost = Node & {
  __typename?: "PanoPost";
  content: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  owner: Maybe<User>;
  title: Scalars["String"]["output"];
  url: Maybe<Scalars["String"]["output"]>;
};

export type PanoPostConnection = {
  __typename?: "PanoPostConnection";
  edges: Maybe<Array<Maybe<PanoPostEdge>>>;
  nodes: Maybe<Array<Maybe<PanoPost>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PanoPostEdge = {
  __typename?: "PanoPostEdge";
  cursor: Scalars["String"]["output"];
  node: Maybe<PanoPost>;
};

export type PanoPostFilter = "ACTIVE" | "ALL" | "HOT" | "LIKED" | "SELF";

export type PanoQuery = {
  __typename?: "PanoQuery";
  allPosts: Maybe<PanoPostConnection>;
  post: Maybe<PanoPost>;
  posts: Array<Maybe<PanoPost>>;
};

export type PanoQueryAllPostsArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  filter: InputMaybe<PanoPostFilter>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
};

export type PanoQueryPostArgs = {
  id: Scalars["ID"]["input"];
};

export type PanoQueryPostsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  node: Maybe<Node>;
  pano: PanoQuery;
  sozluk: SozlukQuery;
  user: Maybe<User>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
  username: InputMaybe<Scalars["String"]["input"]>;
};

export type SozlukQuery = {
  __typename?: "SozlukQuery";
  term: Maybe<SozlukTerm>;
  terms: Maybe<SozlukTermConnection>;
};

export type SozlukQueryTermArgs = {
  id: Scalars["ID"]["input"];
};

export type SozlukQueryTermsArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
};

export type SozlukTerm = Node & {
  __typename?: "SozlukTerm";
  body: SozlukTermBody;
  id: Scalars["ID"]["output"];
  tags: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type SozlukTermBody = {
  __typename?: "SozlukTermBody";
  code: Scalars["String"]["output"];
  html: Scalars["String"]["output"];
  raw: Scalars["String"]["output"];
};

export type SozlukTermConnection = {
  __typename?: "SozlukTermConnection";
  edges: Maybe<Array<SozlukTermEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SozlukTermEdge = {
  __typename?: "SozlukTermEdge";
  cursor: Scalars["String"]["output"];
  node: Maybe<SozlukTerm>;
};

export type User = Node & {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<
  TResult,
  TParent,
  TContext,
  TArgs
>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Node:
    | (PanoPost & { __typename: "PanoPost" })
    | (SozlukTerm & { __typename: "SozlukTerm" })
    | (User & { __typename: "User" });
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Node"]>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PanoPost: ResolverTypeWrapper<PanoPost>;
  PanoPostConnection: ResolverTypeWrapper<PanoPostConnection>;
  PanoPostEdge: ResolverTypeWrapper<PanoPostEdge>;
  PanoPostFilter: PanoPostFilter;
  PanoQuery: ResolverTypeWrapper<PanoQuery>;
  Query: ResolverTypeWrapper<{}>;
  SozlukQuery: ResolverTypeWrapper<SozlukQuery>;
  SozlukTerm: ResolverTypeWrapper<SozlukTerm>;
  SozlukTermBody: ResolverTypeWrapper<SozlukTermBody>;
  SozlukTermConnection: ResolverTypeWrapper<SozlukTermConnection>;
  SozlukTermEdge: ResolverTypeWrapper<SozlukTermEdge>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars["Boolean"]["output"];
  Date: Scalars["Date"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  Node: ResolversInterfaceTypes<ResolversParentTypes>["Node"];
  PageInfo: PageInfo;
  PanoPost: PanoPost;
  PanoPostConnection: PanoPostConnection;
  PanoPostEdge: PanoPostEdge;
  PanoQuery: PanoQuery;
  Query: {};
  SozlukQuery: SozlukQuery;
  SozlukTerm: SozlukTerm;
  SozlukTermBody: SozlukTermBody;
  SozlukTermConnection: SozlukTermConnection;
  SozlukTermEdge: SozlukTermEdge;
  String: Scalars["String"]["output"];
  User: User;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type NodeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"PanoPost" | "SozlukTerm" | "User", ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = ResolversObject<{
  endCursor: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  hasNextPage: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  startCursor: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoPostResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPost"] = ResolversParentTypes["PanoPost"]
> = ResolversObject<{
  content: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoPostConnectionResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPostConnection"] = ResolversParentTypes["PanoPostConnection"]
> = ResolversObject<{
  edges: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoPostEdge"]>>>, ParentType, ContextType>;
  nodes: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoPost"]>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoPostEdgeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPostEdge"] = ResolversParentTypes["PanoPostEdge"]
> = ResolversObject<{
  cursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["PanoPost"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoQueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoQuery"] = ResolversParentTypes["PanoQuery"]
> = ResolversObject<{
  allPosts: Resolver<
    Maybe<ResolversTypes["PanoPostConnection"]>,
    ParentType,
    ContextType,
    Partial<PanoQueryAllPostsArgs>
  >;
  post: Resolver<
    Maybe<ResolversTypes["PanoPost"]>,
    ParentType,
    ContextType,
    RequireFields<PanoQueryPostArgs, "id">
  >;
  posts: Resolver<
    Array<Maybe<ResolversTypes["PanoPost"]>>,
    ParentType,
    ContextType,
    RequireFields<PanoQueryPostsArgs, "ids">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  node: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, "id">
  >;
  pano: Resolver<ResolversTypes["PanoQuery"], ParentType, ContextType>;
  sozluk: Resolver<ResolversTypes["SozlukQuery"], ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType, Partial<QueryUserArgs>>;
}>;

export type SozlukQueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukQuery"] = ResolversParentTypes["SozlukQuery"]
> = ResolversObject<{
  term: Resolver<
    Maybe<ResolversTypes["SozlukTerm"]>,
    ParentType,
    ContextType,
    RequireFields<SozlukQueryTermArgs, "id">
  >;
  terms: Resolver<
    Maybe<ResolversTypes["SozlukTermConnection"]>,
    ParentType,
    ContextType,
    Partial<SozlukQueryTermsArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SozlukTermResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTerm"] = ResolversParentTypes["SozlukTerm"]
> = ResolversObject<{
  body: Resolver<ResolversTypes["SozlukTermBody"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  tags: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SozlukTermBodyResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermBody"] = ResolversParentTypes["SozlukTermBody"]
> = ResolversObject<{
  code: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  html: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  raw: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SozlukTermConnectionResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermConnection"] = ResolversParentTypes["SozlukTermConnection"]
> = ResolversObject<{
  edges: Resolver<Maybe<Array<ResolversTypes["SozlukTermEdge"]>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SozlukTermEdgeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermEdge"] = ResolversParentTypes["SozlukTermEdge"]
> = ResolversObject<{
  cursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["SozlukTerm"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = KampusGQLContext> = ResolversObject<{
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Node: NodeResolvers<ContextType>;
  PageInfo: PageInfoResolvers<ContextType>;
  PanoPost: PanoPostResolvers<ContextType>;
  PanoPostConnection: PanoPostConnectionResolvers<ContextType>;
  PanoPostEdge: PanoPostEdgeResolvers<ContextType>;
  PanoQuery: PanoQueryResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  SozlukQuery: SozlukQueryResolvers<ContextType>;
  SozlukTerm: SozlukTermResolvers<ContextType>;
  SozlukTermBody: SozlukTermBodyResolvers<ContextType>;
  SozlukTermConnection: SozlukTermConnectionResolvers<ContextType>;
  SozlukTermEdge: SozlukTermEdgeResolvers<ContextType>;
  User: UserResolvers<ContextType>;
}>;
