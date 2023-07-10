import { GraphQLResolveInfo } from "graphql";

import { KampusGQLContext } from "./types";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor: Scalars["String"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor: Scalars["String"];
};

export type PanoComment = {
  __typename?: "PanoComment";
  content: Scalars["String"];
  id: Scalars["ID"];
  owner: Maybe<User>;
  parent: Maybe<PanoComment>;
  upvotes: Maybe<Array<Maybe<PanoCommentUpvote>>>;
};

export type PanoCommentUpvote = {
  __typename?: "PanoCommentUpvote";
  id: Scalars["ID"];
  owner: Maybe<User>;
};

export type PanoPost = {
  __typename?: "PanoPost";
  content: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  owner: Maybe<User>;
  slug: Scalars["String"];
  title: Scalars["String"];
  url: Maybe<Scalars["String"]>;
};

export type PanoPostInput = {
  id: Scalars["ID"];
  slug: Scalars["String"];
};

export type PanoPostsConnection = {
  __typename?: "PanoPostsConnection";
  edges: Maybe<Array<Maybe<PanoPostsEdge>>>;
  nodes: Maybe<Array<Maybe<PanoPost>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PanoPostsEdge = {
  __typename?: "PanoPostsEdge";
  cursor: Scalars["String"];
  node: Maybe<PanoPost>;
};

export type PanoQuery = {
  __typename?: "PanoQuery";
  post: Maybe<PanoPost>;
  posts: Maybe<PanoPostsConnection>;
};

export type PanoQueryPostArgs = {
  input: PanoPostInput;
};

export type PanoQueryPostsArgs = {
  after: InputMaybe<Scalars["String"]>;
  before: InputMaybe<Scalars["String"]>;
  first: InputMaybe<Scalars["Int"]>;
  last: InputMaybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  pano: PanoQuery;
  sozluk: SozlukQuery;
  user: Maybe<User>;
};

export type QueryUserArgs = {
  input: UserInput;
};

export type SozlukQuery = {
  __typename?: "SozlukQuery";
  term: Maybe<SozlukTerm>;
  terms: Maybe<SozlukTermConnection>;
};

export type SozlukQueryTermArgs = {
  input: SozlukTermInput;
};

export type SozlukQueryTermsArgs = {
  after: InputMaybe<Scalars["String"]>;
  before: InputMaybe<Scalars["String"]>;
  first: InputMaybe<Scalars["Int"]>;
  last: InputMaybe<Scalars["Int"]>;
};

export type SozlukTerm = {
  __typename?: "SozlukTerm";
  body: SozlukTermBody;
  id: Scalars["ID"];
  tags: Maybe<Array<Scalars["String"]>>;
  title: Scalars["String"];
};

export type SozlukTermBody = {
  __typename?: "SozlukTermBody";
  code: Scalars["String"];
  html: Scalars["String"];
  raw: Scalars["String"];
};

export type SozlukTermConnection = {
  __typename?: "SozlukTermConnection";
  edges: Maybe<Array<Maybe<SozlukTermEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SozlukTermEdge = {
  __typename?: "SozlukTermEdge";
  cursor: Scalars["String"];
  node: Maybe<SozlukTerm>;
};

export type SozlukTermInput = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Maybe<Scalars["String"]>;
};

export type UserInput = {
  id: InputMaybe<Scalars["ID"]>;
  username: InputMaybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PanoComment: ResolverTypeWrapper<PanoComment>;
  PanoCommentUpvote: ResolverTypeWrapper<PanoCommentUpvote>;
  PanoPost: ResolverTypeWrapper<PanoPost>;
  PanoPostInput: PanoPostInput;
  PanoPostsConnection: ResolverTypeWrapper<PanoPostsConnection>;
  PanoPostsEdge: ResolverTypeWrapper<PanoPostsEdge>;
  PanoQuery: ResolverTypeWrapper<PanoQuery>;
  Query: ResolverTypeWrapper<{}>;
  SozlukQuery: ResolverTypeWrapper<SozlukQuery>;
  SozlukTerm: ResolverTypeWrapper<SozlukTerm>;
  SozlukTermBody: ResolverTypeWrapper<SozlukTermBody>;
  SozlukTermConnection: ResolverTypeWrapper<SozlukTermConnection>;
  SozlukTermEdge: ResolverTypeWrapper<SozlukTermEdge>;
  SozlukTermInput: SozlukTermInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  PageInfo: PageInfo;
  PanoComment: PanoComment;
  PanoCommentUpvote: PanoCommentUpvote;
  PanoPost: PanoPost;
  PanoPostInput: PanoPostInput;
  PanoPostsConnection: PanoPostsConnection;
  PanoPostsEdge: PanoPostsEdge;
  PanoQuery: PanoQuery;
  Query: {};
  SozlukQuery: SozlukQuery;
  SozlukTerm: SozlukTerm;
  SozlukTermBody: SozlukTermBody;
  SozlukTermConnection: SozlukTermConnection;
  SozlukTermEdge: SozlukTermEdge;
  SozlukTermInput: SozlukTermInput;
  String: Scalars["String"];
  User: User;
  UserInput: UserInput;
};

export type PageInfoResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = {
  endCursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasNextPage: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  startCursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoCommentResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoComment"] = ResolversParentTypes["PanoComment"]
> = {
  content: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  parent: Resolver<Maybe<ResolversTypes["PanoComment"]>, ParentType, ContextType>;
  upvotes: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PanoCommentUpvote"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoCommentUpvoteResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoCommentUpvote"] = ResolversParentTypes["PanoCommentUpvote"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoPostResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPost"] = ResolversParentTypes["PanoPost"]
> = {
  content: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoPostsConnectionResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPostsConnection"] = ResolversParentTypes["PanoPostsConnection"]
> = {
  edges: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoPostsEdge"]>>>, ParentType, ContextType>;
  nodes: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoPost"]>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoPostsEdgeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPostsEdge"] = ResolversParentTypes["PanoPostsEdge"]
> = {
  cursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["PanoPost"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PanoQueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoQuery"] = ResolversParentTypes["PanoQuery"]
> = {
  post: Resolver<
    Maybe<ResolversTypes["PanoPost"]>,
    ParentType,
    ContextType,
    RequireFields<PanoQueryPostArgs, "input">
  >;
  posts: Resolver<
    Maybe<ResolversTypes["PanoPostsConnection"]>,
    ParentType,
    ContextType,
    Partial<PanoQueryPostsArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  pano: Resolver<ResolversTypes["PanoQuery"], ParentType, ContextType>;
  sozluk: Resolver<ResolversTypes["SozlukQuery"], ParentType, ContextType>;
  user: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "input">
  >;
};

export type SozlukQueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukQuery"] = ResolversParentTypes["SozlukQuery"]
> = {
  term: Resolver<
    Maybe<ResolversTypes["SozlukTerm"]>,
    ParentType,
    ContextType,
    RequireFields<SozlukQueryTermArgs, "input">
  >;
  terms: Resolver<
    Maybe<ResolversTypes["SozlukTermConnection"]>,
    ParentType,
    ContextType,
    Partial<SozlukQueryTermsArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SozlukTermResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTerm"] = ResolversParentTypes["SozlukTerm"]
> = {
  body: Resolver<ResolversTypes["SozlukTermBody"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  tags: Resolver<Maybe<Array<ResolversTypes["String"]>>, ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SozlukTermBodyResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermBody"] = ResolversParentTypes["SozlukTermBody"]
> = {
  code: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  html: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  raw: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SozlukTermConnectionResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermConnection"] = ResolversParentTypes["SozlukTermConnection"]
> = {
  edges: Resolver<Maybe<Array<Maybe<ResolversTypes["SozlukTermEdge"]>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SozlukTermEdgeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["SozlukTermEdge"] = ResolversParentTypes["SozlukTermEdge"]
> = {
  cursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["SozlukTerm"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  username: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = KampusGQLContext> = {
  PageInfo: PageInfoResolvers<ContextType>;
  PanoComment: PanoCommentResolvers<ContextType>;
  PanoCommentUpvote: PanoCommentUpvoteResolvers<ContextType>;
  PanoPost: PanoPostResolvers<ContextType>;
  PanoPostsConnection: PanoPostsConnectionResolvers<ContextType>;
  PanoPostsEdge: PanoPostsEdgeResolvers<ContextType>;
  PanoQuery: PanoQueryResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  SozlukQuery: SozlukQueryResolvers<ContextType>;
  SozlukTerm: SozlukTermResolvers<ContextType>;
  SozlukTermBody: SozlukTermBodyResolvers<ContextType>;
  SozlukTermConnection: SozlukTermConnectionResolvers<ContextType>;
  SozlukTermEdge: SozlukTermEdgeResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};
