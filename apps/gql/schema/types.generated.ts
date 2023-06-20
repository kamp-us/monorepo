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

export type Query = {
  __typename?: "Query";
  sozluk: SozlukQuery;
  user: Maybe<User>;
};

export type QueryUserArgs = {
  input: UserInput;
};

export type SozlukQuery = {
  __typename?: "SozlukQuery";
  term: Maybe<SozlukTerm>;
};

export type SozlukQueryTermArgs = {
  input: SozlukTermInput;
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

export type SozlukTermInput = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
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
  Query: ResolverTypeWrapper<{}>;
  SozlukQuery: ResolverTypeWrapper<SozlukQuery>;
  SozlukTerm: ResolverTypeWrapper<SozlukTerm>;
  SozlukTermBody: ResolverTypeWrapper<SozlukTermBody>;
  SozlukTermInput: SozlukTermInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  ID: Scalars["ID"];
  Query: {};
  SozlukQuery: SozlukQuery;
  SozlukTerm: SozlukTerm;
  SozlukTermBody: SozlukTermBody;
  SozlukTermInput: SozlukTermInput;
  String: Scalars["String"];
  User: User;
  UserInput: UserInput;
};

export type QueryResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
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

export type UserResolvers<
  ContextType = KampusGQLContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = KampusGQLContext> = {
  Query: QueryResolvers<ContextType>;
  SozlukQuery: SozlukQueryResolvers<ContextType>;
  SozlukTerm: SozlukTermResolvers<ContextType>;
  SozlukTermBody: SozlukTermBodyResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};
