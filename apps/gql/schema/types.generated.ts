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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type Actor = {
  displayName: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type CreatePanoCommentInput = {
  content: Scalars["String"]["input"];
  parentID: InputMaybe<Scalars["String"]["input"]>;
  postID: Scalars["String"]["input"];
};

export type CreatePanoCommentPayload = {
  __typename?: "CreatePanoCommentPayload";
  edge: Maybe<PanoCommentEdge>;
  error: Maybe<PanoCommentError>;
};

export type CreatePanoPostInput = {
  content: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  url: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePanoPostPayload = {
  __typename?: "CreatePanoPostPayload";
  edge: Maybe<PanoPostEdge>;
  error: Maybe<PanoPostError>;
};

export type CreatePanoUpvoteInput = {
  id: Scalars["ID"]["input"];
};

export type CreatePanoUpvotePayload = {
  __typename?: "CreatePanoUpvotePayload";
  error: Maybe<PanoUpvoteError>;
  node: Maybe<PanoUpvote>;
};

export type InvalidInput = UserError & {
  __typename?: "InvalidInput";
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPanoComment: Maybe<CreatePanoCommentPayload>;
  createPanoPost: Maybe<CreatePanoPostPayload>;
  createPanoUpvote: Maybe<CreatePanoUpvotePayload>;
  removePanoComment: Maybe<RemovePanoCommentPayload>;
  removePanoPost: Maybe<RemovePanoPostPayload>;
  removePanoUpvote: Maybe<RemovePanoUpvotePayload>;
  updatePanoComment: Maybe<UpdatePanoCommentPayload>;
  updatePanoPost: Maybe<UpdatePanoPostPayload>;
};

export type MutationCreatePanoCommentArgs = {
  input: CreatePanoCommentInput;
};

export type MutationCreatePanoPostArgs = {
  input: CreatePanoPostInput;
};

export type MutationCreatePanoUpvoteArgs = {
  input: CreatePanoUpvoteInput;
};

export type MutationRemovePanoCommentArgs = {
  input: RemovePanoCommentInput;
};

export type MutationRemovePanoPostArgs = {
  input: RemovePanoPostInput;
};

export type MutationRemovePanoUpvoteArgs = {
  input: RemovePanoUpvoteInput;
};

export type MutationUpdatePanoCommentArgs = {
  input: UpdatePanoCommentInput;
};

export type MutationUpdatePanoPostArgs = {
  input: UpdatePanoPostInput;
};

export type Node = {
  id: Scalars["ID"]["output"];
};

export type NotAuthorized = UserError & {
  __typename?: "NotAuthorized";
  message: Scalars["String"]["output"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor: Maybe<Scalars["String"]["output"]>;
};

export type PanoComment = Node & {
  __typename?: "PanoComment";
  commentCount: Maybe<Scalars["Int"]["output"]>;
  comments: Maybe<PanoCommentConnection>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  isUpvotedByViewer: Scalars["Boolean"]["output"];
  owner: Maybe<User>;
  parent: Maybe<PanoComment>;
  post: Maybe<PanoPost>;
  upvoteCount: Maybe<Scalars["Int"]["output"]>;
};

export type PanoCommentCommentsArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
};

export type PanoCommentConnection = {
  __typename?: "PanoCommentConnection";
  edges: Maybe<Array<Maybe<PanoCommentEdge>>>;
  nodes: Maybe<Array<Maybe<PanoComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type PanoCommentEdge = {
  __typename?: "PanoCommentEdge";
  cursor: Scalars["String"]["output"];
  node: Maybe<PanoComment>;
};

export type PanoCommentError = InvalidInput | NotAuthorized;

export type PanoPost = Node &
  Upvotable & {
    __typename?: "PanoPost";
    commentCount: Maybe<Scalars["Int"]["output"]>;
    comments: Maybe<PanoCommentConnection>;
    content: Maybe<Scalars["String"]["output"]>;
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    isUpvotedByViewer: Scalars["Boolean"]["output"];
    owner: Maybe<User>;
    site: Maybe<Scalars["String"]["output"]>;
    title: Scalars["String"]["output"];
    upvoteCount: Maybe<Scalars["Int"]["output"]>;
    url: Maybe<Scalars["String"]["output"]>;
  };

export type PanoPostCommentsArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
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

export type PanoPostError = InvalidInput | NotAuthorized;

export type PanoPostFilter = "ACTIVE" | "ALL" | "HOT" | "LIKED" | "SELF";

export type PanoQuery = {
  __typename?: "PanoQuery";
  post: Maybe<PanoPost>;
  posts: Array<Maybe<PanoPost>>;
  postsBySite: Maybe<PanoPostConnection>;
};

export type PanoQueryPostArgs = {
  id: Scalars["ID"]["input"];
};

export type PanoQueryPostsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type PanoQueryPostsBySiteArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  site: Scalars["String"]["input"];
};

export type PanoUpvote = {
  __typename?: "PanoUpvote";
  id: Scalars["ID"]["output"];
  node: Maybe<Upvotable>;
  owner: Maybe<User>;
};

export type PanoUpvoteError = InvalidInput | NotAuthorized;

export type Query = {
  __typename?: "Query";
  node: Maybe<Node>;
  pano: PanoQuery;
  sozluk: SozlukQuery;
  user: Maybe<User>;
  viewer: Maybe<Viewer>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: InputMaybe<Scalars["ID"]["input"]>;
  username: InputMaybe<Scalars["String"]["input"]>;
};

export type RemovePanoCommentInput = {
  id: Scalars["ID"]["input"];
};

export type RemovePanoCommentPayload = {
  __typename?: "RemovePanoCommentPayload";
  edge: Maybe<PanoCommentEdge>;
  error: Maybe<PanoCommentError>;
};

export type RemovePanoPostInput = {
  id: Scalars["ID"]["input"];
};

export type RemovePanoPostPayload = {
  __typename?: "RemovePanoPostPayload";
  edge: Maybe<PanoPostEdge>;
  error: Maybe<PanoPostError>;
};

export type RemovePanoUpvoteInput = {
  id: Scalars["ID"]["input"];
};

export type RemovePanoUpvotePayload = {
  __typename?: "RemovePanoUpvotePayload";
  error: Maybe<PanoUpvoteError>;
  node: Maybe<PanoUpvote>;
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

export type UpdatePanoCommentInput = {
  content: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type UpdatePanoCommentPayload = {
  __typename?: "UpdatePanoCommentPayload";
  edge: Maybe<PanoCommentEdge>;
  error: Maybe<PanoCommentError>;
};

export type UpdatePanoPostInput = {
  content: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
  url: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePanoPostPayload = {
  __typename?: "UpdatePanoPostPayload";
  edge: Maybe<PanoPostEdge>;
  error: Maybe<PanoPostError>;
};

export type Upvotable = {
  id: Scalars["ID"]["output"];
  isUpvotedByViewer: Scalars["Boolean"]["output"];
  upvoteCount: Maybe<Scalars["Int"]["output"]>;
};

export type User = Actor &
  Node & {
    __typename?: "User";
    displayName: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    panoPosts: Maybe<PanoPostConnection>;
    username: Scalars["String"]["output"];
  };

export type UserPanoPostsArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  filter: InputMaybe<PanoPostFilter>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserError = {
  message: Scalars["String"]["output"];
};

export type Viewer = {
  __typename?: "Viewer";
  actor: Maybe<Actor>;
  panoFeed: Maybe<PanoPostConnection>;
};

export type ViewerPanoFeedArgs = {
  after: InputMaybe<Scalars["String"]["input"]>;
  before: InputMaybe<Scalars["String"]["input"]>;
  filter: InputMaybe<PanoPostFilter>;
  first: InputMaybe<Scalars["Int"]["input"]>;
  last: InputMaybe<Scalars["Int"]["input"]>;
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

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  PanoCommentError:
    | (InvalidInput & { __typename: "InvalidInput" })
    | (NotAuthorized & { __typename: "NotAuthorized" });
  PanoPostError:
    | (InvalidInput & { __typename: "InvalidInput" })
    | (NotAuthorized & { __typename: "NotAuthorized" });
  PanoUpvoteError:
    | (InvalidInput & { __typename: "InvalidInput" })
    | (NotAuthorized & { __typename: "NotAuthorized" });
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Actor: User & { __typename: "User" };
  Node:
    | (PanoComment & { __typename: "PanoComment" })
    | (PanoPost & { __typename: "PanoPost" })
    | (SozlukTerm & { __typename: "SozlukTerm" })
    | (User & { __typename: "User" });
  Upvotable: PanoPost & { __typename: "PanoPost" };
  UserError:
    | (InvalidInput & { __typename: "InvalidInput" })
    | (NotAuthorized & { __typename: "NotAuthorized" });
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Actor: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Actor"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CreatePanoCommentInput: CreatePanoCommentInput;
  CreatePanoCommentPayload: ResolverTypeWrapper<
    Omit<CreatePanoCommentPayload, "error"> & { error: Maybe<ResolversTypes["PanoCommentError"]> }
  >;
  CreatePanoPostInput: CreatePanoPostInput;
  CreatePanoPostPayload: ResolverTypeWrapper<
    Omit<CreatePanoPostPayload, "error"> & { error: Maybe<ResolversTypes["PanoPostError"]> }
  >;
  CreatePanoUpvoteInput: CreatePanoUpvoteInput;
  CreatePanoUpvotePayload: ResolverTypeWrapper<
    Omit<CreatePanoUpvotePayload, "error"> & { error: Maybe<ResolversTypes["PanoUpvoteError"]> }
  >;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  InvalidInput: ResolverTypeWrapper<InvalidInput>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Node"]>;
  NotAuthorized: ResolverTypeWrapper<NotAuthorized>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PanoComment: ResolverTypeWrapper<PanoComment>;
  PanoCommentConnection: ResolverTypeWrapper<PanoCommentConnection>;
  PanoCommentEdge: ResolverTypeWrapper<PanoCommentEdge>;
  PanoCommentError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["PanoCommentError"]>;
  PanoPost: ResolverTypeWrapper<PanoPost>;
  PanoPostConnection: ResolverTypeWrapper<PanoPostConnection>;
  PanoPostEdge: ResolverTypeWrapper<PanoPostEdge>;
  PanoPostError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["PanoPostError"]>;
  PanoPostFilter: PanoPostFilter;
  PanoQuery: ResolverTypeWrapper<PanoQuery>;
  PanoUpvote: ResolverTypeWrapper<PanoUpvote>;
  PanoUpvoteError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["PanoUpvoteError"]>;
  Query: ResolverTypeWrapper<{}>;
  RemovePanoCommentInput: RemovePanoCommentInput;
  RemovePanoCommentPayload: ResolverTypeWrapper<
    Omit<RemovePanoCommentPayload, "error"> & { error: Maybe<ResolversTypes["PanoCommentError"]> }
  >;
  RemovePanoPostInput: RemovePanoPostInput;
  RemovePanoPostPayload: ResolverTypeWrapper<
    Omit<RemovePanoPostPayload, "error"> & { error: Maybe<ResolversTypes["PanoPostError"]> }
  >;
  RemovePanoUpvoteInput: RemovePanoUpvoteInput;
  RemovePanoUpvotePayload: ResolverTypeWrapper<
    Omit<RemovePanoUpvotePayload, "error"> & { error: Maybe<ResolversTypes["PanoUpvoteError"]> }
  >;
  SozlukQuery: ResolverTypeWrapper<SozlukQuery>;
  SozlukTerm: ResolverTypeWrapper<SozlukTerm>;
  SozlukTermBody: ResolverTypeWrapper<SozlukTermBody>;
  SozlukTermConnection: ResolverTypeWrapper<SozlukTermConnection>;
  SozlukTermEdge: ResolverTypeWrapper<SozlukTermEdge>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UpdatePanoCommentInput: UpdatePanoCommentInput;
  UpdatePanoCommentPayload: ResolverTypeWrapper<
    Omit<UpdatePanoCommentPayload, "error"> & { error: Maybe<ResolversTypes["PanoCommentError"]> }
  >;
  UpdatePanoPostInput: UpdatePanoPostInput;
  UpdatePanoPostPayload: ResolverTypeWrapper<
    Omit<UpdatePanoPostPayload, "error"> & { error: Maybe<ResolversTypes["PanoPostError"]> }
  >;
  Upvotable: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Upvotable"]>;
  User: ResolverTypeWrapper<User>;
  UserError: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["UserError"]>;
  Viewer: ResolverTypeWrapper<Viewer>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Actor: ResolversInterfaceTypes<ResolversParentTypes>["Actor"];
  Boolean: Scalars["Boolean"]["output"];
  CreatePanoCommentInput: CreatePanoCommentInput;
  CreatePanoCommentPayload: Omit<CreatePanoCommentPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoCommentError"]>;
  };
  CreatePanoPostInput: CreatePanoPostInput;
  CreatePanoPostPayload: Omit<CreatePanoPostPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoPostError"]>;
  };
  CreatePanoUpvoteInput: CreatePanoUpvoteInput;
  CreatePanoUpvotePayload: Omit<CreatePanoUpvotePayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoUpvoteError"]>;
  };
  Date: Scalars["Date"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  InvalidInput: InvalidInput;
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>["Node"];
  NotAuthorized: NotAuthorized;
  PageInfo: PageInfo;
  PanoComment: PanoComment;
  PanoCommentConnection: PanoCommentConnection;
  PanoCommentEdge: PanoCommentEdge;
  PanoCommentError: ResolversUnionTypes<ResolversParentTypes>["PanoCommentError"];
  PanoPost: PanoPost;
  PanoPostConnection: PanoPostConnection;
  PanoPostEdge: PanoPostEdge;
  PanoPostError: ResolversUnionTypes<ResolversParentTypes>["PanoPostError"];
  PanoQuery: PanoQuery;
  PanoUpvote: PanoUpvote;
  PanoUpvoteError: ResolversUnionTypes<ResolversParentTypes>["PanoUpvoteError"];
  Query: {};
  RemovePanoCommentInput: RemovePanoCommentInput;
  RemovePanoCommentPayload: Omit<RemovePanoCommentPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoCommentError"]>;
  };
  RemovePanoPostInput: RemovePanoPostInput;
  RemovePanoPostPayload: Omit<RemovePanoPostPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoPostError"]>;
  };
  RemovePanoUpvoteInput: RemovePanoUpvoteInput;
  RemovePanoUpvotePayload: Omit<RemovePanoUpvotePayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoUpvoteError"]>;
  };
  SozlukQuery: SozlukQuery;
  SozlukTerm: SozlukTerm;
  SozlukTermBody: SozlukTermBody;
  SozlukTermConnection: SozlukTermConnection;
  SozlukTermEdge: SozlukTermEdge;
  String: Scalars["String"]["output"];
  UpdatePanoCommentInput: UpdatePanoCommentInput;
  UpdatePanoCommentPayload: Omit<UpdatePanoCommentPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoCommentError"]>;
  };
  UpdatePanoPostInput: UpdatePanoPostInput;
  UpdatePanoPostPayload: Omit<UpdatePanoPostPayload, "error"> & {
    error: Maybe<ResolversParentTypes["PanoPostError"]>;
  };
  Upvotable: ResolversInterfaceTypes<ResolversParentTypes>["Upvotable"];
  User: User;
  UserError: ResolversInterfaceTypes<ResolversParentTypes>["UserError"];
  Viewer: Viewer;
}>;

export type ActorResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Actor"] = ResolversParentTypes["Actor"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"User", ParentType, ContextType>;
}>;

export type CreatePanoCommentPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["CreatePanoCommentPayload"] = ResolversParentTypes["CreatePanoCommentPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoCommentEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoCommentError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatePanoPostPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["CreatePanoPostPayload"] = ResolversParentTypes["CreatePanoPostPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoPostEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoPostError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatePanoUpvotePayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["CreatePanoUpvotePayload"] = ResolversParentTypes["CreatePanoUpvotePayload"]
> = ResolversObject<{
  error: Resolver<Maybe<ResolversTypes["PanoUpvoteError"]>, ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["PanoUpvote"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type InvalidInputResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["InvalidInput"] = ResolversParentTypes["InvalidInput"]
> = ResolversObject<{
  message: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createPanoComment: Resolver<
    Maybe<ResolversTypes["CreatePanoCommentPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePanoCommentArgs, "input">
  >;
  createPanoPost: Resolver<
    Maybe<ResolversTypes["CreatePanoPostPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePanoPostArgs, "input">
  >;
  createPanoUpvote: Resolver<
    Maybe<ResolversTypes["CreatePanoUpvotePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePanoUpvoteArgs, "input">
  >;
  removePanoComment: Resolver<
    Maybe<ResolversTypes["RemovePanoCommentPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemovePanoCommentArgs, "input">
  >;
  removePanoPost: Resolver<
    Maybe<ResolversTypes["RemovePanoPostPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemovePanoPostArgs, "input">
  >;
  removePanoUpvote: Resolver<
    Maybe<ResolversTypes["RemovePanoUpvotePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemovePanoUpvoteArgs, "input">
  >;
  updatePanoComment: Resolver<
    Maybe<ResolversTypes["UpdatePanoCommentPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePanoCommentArgs, "input">
  >;
  updatePanoPost: Resolver<
    Maybe<ResolversTypes["UpdatePanoPostPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePanoPostArgs, "input">
  >;
}>;

export type NodeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<
    "PanoComment" | "PanoPost" | "SozlukTerm" | "User",
    ParentType,
    ContextType
  >;
}>;

export type NotAuthorizedResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["NotAuthorized"] = ResolversParentTypes["NotAuthorized"]
> = ResolversObject<{
  message: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type PanoCommentResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoComment"] = ResolversParentTypes["PanoComment"]
> = ResolversObject<{
  commentCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  comments: Resolver<
    Maybe<ResolversTypes["PanoCommentConnection"]>,
    ParentType,
    ContextType,
    Partial<PanoCommentCommentsArgs>
  >;
  content: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isUpvotedByViewer: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  parent: Resolver<Maybe<ResolversTypes["PanoComment"]>, ParentType, ContextType>;
  post: Resolver<Maybe<ResolversTypes["PanoPost"]>, ParentType, ContextType>;
  upvoteCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoCommentConnectionResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoCommentConnection"] = ResolversParentTypes["PanoCommentConnection"]
> = ResolversObject<{
  edges: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoCommentEdge"]>>>, ParentType, ContextType>;
  nodes: Resolver<Maybe<Array<Maybe<ResolversTypes["PanoComment"]>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoCommentEdgeResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoCommentEdge"] = ResolversParentTypes["PanoCommentEdge"]
> = ResolversObject<{
  cursor: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["PanoComment"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoCommentErrorResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoCommentError"] = ResolversParentTypes["PanoCommentError"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"InvalidInput" | "NotAuthorized", ParentType, ContextType>;
}>;

export type PanoPostResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPost"] = ResolversParentTypes["PanoPost"]
> = ResolversObject<{
  commentCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  comments: Resolver<
    Maybe<ResolversTypes["PanoCommentConnection"]>,
    ParentType,
    ContextType,
    Partial<PanoPostCommentsArgs>
  >;
  content: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isUpvotedByViewer: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  site: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  upvoteCount: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
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

export type PanoPostErrorResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoPostError"] = ResolversParentTypes["PanoPostError"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"InvalidInput" | "NotAuthorized", ParentType, ContextType>;
}>;

export type PanoQueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoQuery"] = ResolversParentTypes["PanoQuery"]
> = ResolversObject<{
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
  postsBySite: Resolver<
    Maybe<ResolversTypes["PanoPostConnection"]>,
    ParentType,
    ContextType,
    RequireFields<PanoQueryPostsBySiteArgs, "site">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoUpvoteResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoUpvote"] = ResolversParentTypes["PanoUpvote"]
> = ResolversObject<{
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["Upvotable"]>, ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PanoUpvoteErrorResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["PanoUpvoteError"] = ResolversParentTypes["PanoUpvoteError"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"InvalidInput" | "NotAuthorized", ParentType, ContextType>;
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
  viewer: Resolver<Maybe<ResolversTypes["Viewer"]>, ParentType, ContextType>;
}>;

export type RemovePanoCommentPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["RemovePanoCommentPayload"] = ResolversParentTypes["RemovePanoCommentPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoCommentEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoCommentError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemovePanoPostPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["RemovePanoPostPayload"] = ResolversParentTypes["RemovePanoPostPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoPostEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoPostError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemovePanoUpvotePayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["RemovePanoUpvotePayload"] = ResolversParentTypes["RemovePanoUpvotePayload"]
> = ResolversObject<{
  error: Resolver<Maybe<ResolversTypes["PanoUpvoteError"]>, ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes["PanoUpvote"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type UpdatePanoCommentPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["UpdatePanoCommentPayload"] = ResolversParentTypes["UpdatePanoCommentPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoCommentEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoCommentError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdatePanoPostPayloadResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["UpdatePanoPostPayload"] = ResolversParentTypes["UpdatePanoPostPayload"]
> = ResolversObject<{
  edge: Resolver<Maybe<ResolversTypes["PanoPostEdge"]>, ParentType, ContextType>;
  error: Resolver<Maybe<ResolversTypes["PanoPostError"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpvotableResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Upvotable"] = ResolversParentTypes["Upvotable"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"PanoPost", ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  displayName: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  panoPosts: Resolver<
    Maybe<ResolversTypes["PanoPostConnection"]>,
    ParentType,
    ContextType,
    Partial<UserPanoPostsArgs>
  >;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserErrorResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["UserError"] = ResolversParentTypes["UserError"]
> = ResolversObject<{
  __resolveType?: TypeResolveFn<"InvalidInput" | "NotAuthorized", ParentType, ContextType>;
}>;

export type ViewerResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Viewer"] = ResolversParentTypes["Viewer"]
> = ResolversObject<{
  actor: Resolver<Maybe<ResolversTypes["Actor"]>, ParentType, ContextType>;
  panoFeed: Resolver<
    Maybe<ResolversTypes["PanoPostConnection"]>,
    ParentType,
    ContextType,
    Partial<ViewerPanoFeedArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = KampusGQLContext> = ResolversObject<{
  Actor: ActorResolvers<ContextType>;
  CreatePanoCommentPayload: CreatePanoCommentPayloadResolvers<ContextType>;
  CreatePanoPostPayload: CreatePanoPostPayloadResolvers<ContextType>;
  CreatePanoUpvotePayload: CreatePanoUpvotePayloadResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  InvalidInput: InvalidInputResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Node: NodeResolvers<ContextType>;
  NotAuthorized: NotAuthorizedResolvers<ContextType>;
  PageInfo: PageInfoResolvers<ContextType>;
  PanoComment: PanoCommentResolvers<ContextType>;
  PanoCommentConnection: PanoCommentConnectionResolvers<ContextType>;
  PanoCommentEdge: PanoCommentEdgeResolvers<ContextType>;
  PanoCommentError: PanoCommentErrorResolvers<ContextType>;
  PanoPost: PanoPostResolvers<ContextType>;
  PanoPostConnection: PanoPostConnectionResolvers<ContextType>;
  PanoPostEdge: PanoPostEdgeResolvers<ContextType>;
  PanoPostError: PanoPostErrorResolvers<ContextType>;
  PanoQuery: PanoQueryResolvers<ContextType>;
  PanoUpvote: PanoUpvoteResolvers<ContextType>;
  PanoUpvoteError: PanoUpvoteErrorResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  RemovePanoCommentPayload: RemovePanoCommentPayloadResolvers<ContextType>;
  RemovePanoPostPayload: RemovePanoPostPayloadResolvers<ContextType>;
  RemovePanoUpvotePayload: RemovePanoUpvotePayloadResolvers<ContextType>;
  SozlukQuery: SozlukQueryResolvers<ContextType>;
  SozlukTerm: SozlukTermResolvers<ContextType>;
  SozlukTermBody: SozlukTermBodyResolvers<ContextType>;
  SozlukTermConnection: SozlukTermConnectionResolvers<ContextType>;
  SozlukTermEdge: SozlukTermEdgeResolvers<ContextType>;
  UpdatePanoCommentPayload: UpdatePanoCommentPayloadResolvers<ContextType>;
  UpdatePanoPostPayload: UpdatePanoPostPayloadResolvers<ContextType>;
  Upvotable: UpvotableResolvers<ContextType>;
  User: UserResolvers<ContextType>;
  UserError: UserErrorResolvers<ContextType>;
  Viewer: ViewerResolvers<ContextType>;
}>;
