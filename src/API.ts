/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  url: string,
  owner: string,
  site?: string | null,
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  site?: ModelStringInput | null,
  isUpvoted?: ModelBooleanInput | null,
  upvoteCount?: ModelIntInput | null,
  commentCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  url: string,
  owner: string,
  site?: string | null,
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
  comments?: ModelCommentConnection | null,
  upvotes?: ModelUpvoteConnection | null,
  createdAt: string,
  updatedAt: string,
  tags?: ModelPostTagsConnection | null,
  collections?: ModelCollectionPostsConnection | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  owner: string,
  parentID?: string | null,
  postID: string,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUpvoteConnection = {
  __typename: "ModelUpvoteConnection",
  items:  Array<Upvote | null >,
  nextToken?: string | null,
};

export type Upvote = {
  __typename: "Upvote",
  postID: string,
  owner: string,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
  postUpvotesId?: string | null,
};

export type ModelPostTagsConnection = {
  __typename: "ModelPostTagsConnection",
  items:  Array<PostTags | null >,
  nextToken?: string | null,
};

export type PostTags = {
  __typename: "PostTags",
  id: string,
  postID: string,
  tagID: string,
  post: Post,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  category: string,
  posts?: ModelPostTagsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCollectionPostsConnection = {
  __typename: "ModelCollectionPostsConnection",
  items:  Array<CollectionPosts | null >,
  nextToken?: string | null,
};

export type CollectionPosts = {
  __typename: "CollectionPosts",
  id: string,
  postID: string,
  collectionID: string,
  post: Post,
  collection: Collection,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Collection = {
  __typename: "Collection",
  id: string,
  name: string,
  description?: string | null,
  isPrivate: boolean,
  isPublished: boolean,
  owner: string,
  slug: string,
  posts?: ModelCollectionPostsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  url?: string | null,
  owner?: string | null,
  site?: string | null,
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  owner: string,
  parentID?: string | null,
  postID: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  owner?: string | null,
  parentID?: string | null,
  postID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUpvoteInput = {
  postID: string,
  owner: string,
  postUpvotesId?: string | null,
};

export type ModelUpvoteConditionInput = {
  and?: Array< ModelUpvoteConditionInput | null > | null,
  or?: Array< ModelUpvoteConditionInput | null > | null,
  not?: ModelUpvoteConditionInput | null,
  postUpvotesId?: ModelIDInput | null,
};

export type UpdateUpvoteInput = {
  postID: string,
  owner: string,
  postUpvotesId?: string | null,
};

export type DeleteUpvoteInput = {
  postID: string,
  owner: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  category: string,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  category?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateCollectionInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  isPrivate: boolean,
  isPublished: boolean,
  owner: string,
  slug: string,
};

export type ModelCollectionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  isPublished?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelCollectionConditionInput | null > | null,
  or?: Array< ModelCollectionConditionInput | null > | null,
  not?: ModelCollectionConditionInput | null,
};

export type UpdateCollectionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  isPrivate?: boolean | null,
  isPublished?: boolean | null,
  owner?: string | null,
  slug?: string | null,
};

export type DeleteCollectionInput = {
  id: string,
};

export type CreatePostTagsInput = {
  id?: string | null,
  postID: string,
  tagID: string,
};

export type ModelPostTagsConditionInput = {
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagsConditionInput | null > | null,
  or?: Array< ModelPostTagsConditionInput | null > | null,
  not?: ModelPostTagsConditionInput | null,
};

export type UpdatePostTagsInput = {
  id: string,
  postID?: string | null,
  tagID?: string | null,
};

export type DeletePostTagsInput = {
  id: string,
};

export type CreateCollectionPostsInput = {
  id?: string | null,
  postID: string,
  collectionID: string,
};

export type ModelCollectionPostsConditionInput = {
  postID?: ModelIDInput | null,
  collectionID?: ModelIDInput | null,
  and?: Array< ModelCollectionPostsConditionInput | null > | null,
  or?: Array< ModelCollectionPostsConditionInput | null > | null,
  not?: ModelCollectionPostsConditionInput | null,
};

export type UpdateCollectionPostsInput = {
  id: string,
  postID?: string | null,
  collectionID?: string | null,
};

export type DeleteCollectionPostsInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  site?: ModelStringInput | null,
  isUpvoted?: ModelBooleanInput | null,
  upvoteCount?: ModelIntInput | null,
  commentCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  url?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  site?: SearchableStringFilterInput | null,
  isUpvoted?: SearchableBooleanFilterInput | null,
  upvoteCount?: SearchableIntFilterInput | null,
  commentCount?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  url = "url",
  owner = "owner",
  site = "site",
  isUpvoted = "isUpvoted",
  upvoteCount = "upvoteCount",
  commentCount = "commentCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePostAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePostAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchablePostAggregateField {
  id = "id",
  title = "title",
  url = "url",
  owner = "owner",
  site = "site",
  isUpvoted = "isUpvoted",
  upvoteCount = "upvoteCount",
  commentCount = "commentCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePostConnection = {
  __typename: "SearchablePostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUpvoteFilterInput = {
  postID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUpvoteFilterInput | null > | null,
  or?: Array< ModelUpvoteFilterInput | null > | null,
  not?: ModelUpvoteFilterInput | null,
  postUpvotesId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelCollectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  isPublished?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelCollectionFilterInput | null > | null,
  or?: Array< ModelCollectionFilterInput | null > | null,
  not?: ModelCollectionFilterInput | null,
};

export type ModelCollectionConnection = {
  __typename: "ModelCollectionConnection",
  items:  Array<Collection | null >,
  nextToken?: string | null,
};

export type ModelPostTagsFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagsFilterInput | null > | null,
  or?: Array< ModelPostTagsFilterInput | null > | null,
  not?: ModelPostTagsFilterInput | null,
};

export type ModelCollectionPostsFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  collectionID?: ModelIDInput | null,
  and?: Array< ModelCollectionPostsFilterInput | null > | null,
  or?: Array< ModelCollectionPostsFilterInput | null > | null,
  not?: ModelCollectionPostsFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUpvoteMutationVariables = {
  input: CreateUpvoteInput,
  condition?: ModelUpvoteConditionInput | null,
};

export type CreateUpvoteMutation = {
  createUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type UpdateUpvoteMutationVariables = {
  input: UpdateUpvoteInput,
  condition?: ModelUpvoteConditionInput | null,
};

export type UpdateUpvoteMutation = {
  updateUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type DeleteUpvoteMutationVariables = {
  input: DeleteUpvoteInput,
  condition?: ModelUpvoteConditionInput | null,
};

export type DeleteUpvoteMutation = {
  deleteUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCollectionMutationVariables = {
  input: CreateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type CreateCollectionMutation = {
  createCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCollectionMutationVariables = {
  input: UpdateCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type UpdateCollectionMutation = {
  updateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCollectionMutationVariables = {
  input: DeleteCollectionInput,
  condition?: ModelCollectionConditionInput | null,
};

export type DeleteCollectionMutation = {
  deleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostTagsMutationVariables = {
  input: CreatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type CreatePostTagsMutation = {
  createPostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostTagsMutationVariables = {
  input: UpdatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type UpdatePostTagsMutation = {
  updatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostTagsMutationVariables = {
  input: DeletePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type DeletePostTagsMutation = {
  deletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCollectionPostsMutationVariables = {
  input: CreateCollectionPostsInput,
  condition?: ModelCollectionPostsConditionInput | null,
};

export type CreateCollectionPostsMutation = {
  createCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCollectionPostsMutationVariables = {
  input: UpdateCollectionPostsInput,
  condition?: ModelCollectionPostsConditionInput | null,
};

export type UpdateCollectionPostsMutation = {
  updateCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCollectionPostsMutationVariables = {
  input: DeleteCollectionPostsInput,
  condition?: ModelCollectionPostsConditionInput | null,
};

export type DeleteCollectionPostsMutation = {
  deleteCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: Array< SearchablePostSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePostAggregationInput | null > | null,
};

export type SearchPostsQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      owner: string,
      parentID?: string | null,
      postID: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUpvoteQueryVariables = {
  postID: string,
  owner: string,
};

export type GetUpvoteQuery = {
  getUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type ListUpvotesQueryVariables = {
  postID?: string | null,
  owner?: ModelStringKeyConditionInput | null,
  filter?: ModelUpvoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUpvotesQuery = {
  listUpvotes?:  {
    __typename: "ModelUpvoteConnection",
    items:  Array< {
      __typename: "Upvote",
      postID: string,
      owner: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        url: string,
        owner: string,
        site?: string | null,
        isUpvoted?: boolean | null,
        upvoteCount?: number | null,
        commentCount?: number | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        upvotes?:  {
          __typename: "ModelUpvoteConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      postUpvotesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCollectionQueryVariables = {
  id: string,
};

export type GetCollectionQuery = {
  getCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCollectionsQueryVariables = {
  filter?: ModelCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectionsQuery = {
  listCollections?:  {
    __typename: "ModelCollectionConnection",
    items:  Array< {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTagsQueryVariables = {
  id: string,
};

export type GetPostTagsQuery = {
  getPostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postID: string,
      tagID: string,
      post:  {
        __typename: "Post",
        id: string,
        title: string,
        url: string,
        owner: string,
        site?: string | null,
        isUpvoted?: boolean | null,
        upvoteCount?: number | null,
        commentCount?: number | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        upvotes?:  {
          __typename: "ModelUpvoteConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        name: string,
        category: string,
        posts?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCollectionPostsQueryVariables = {
  id: string,
};

export type GetCollectionPostsQuery = {
  getCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCollectionPostsQueryVariables = {
  filter?: ModelCollectionPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectionPostsQuery = {
  listCollectionPosts?:  {
    __typename: "ModelCollectionPostsConnection",
    items:  Array< {
      __typename: "CollectionPosts",
      id: string,
      postID: string,
      collectionID: string,
      post:  {
        __typename: "Post",
        id: string,
        title: string,
        url: string,
        owner: string,
        site?: string | null,
        isUpvoted?: boolean | null,
        upvoteCount?: number | null,
        commentCount?: number | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        upvotes?:  {
          __typename: "ModelUpvoteConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
      },
      collection:  {
        __typename: "Collection",
        id: string,
        name: string,
        description?: string | null,
        isPrivate: boolean,
        isPublished: boolean,
        owner: string,
        slug: string,
        posts?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    url: string,
    owner: string,
    site?: string | null,
    isUpvoted?: boolean | null,
    upvoteCount?: number | null,
    commentCount?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    upvotes?:  {
      __typename: "ModelUpvoteConnection",
      items:  Array< {
        __typename: "Upvote",
        postID: string,
        owner: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        postUpvotesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    collections?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    owner: string,
    parentID?: string | null,
    postID: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner: string,
        parentID?: string | null,
        postID: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUpvoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUpvoteSubscription = {
  onCreateUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type OnUpdateUpvoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUpvoteSubscription = {
  onUpdateUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type OnDeleteUpvoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUpvoteSubscription = {
  onDeleteUpvote?:  {
    __typename: "Upvote",
    postID: string,
    owner: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postUpvotesId?: string | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    category: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      items:  Array< {
        __typename: "PostTags",
        id: string,
        postID: string,
        tagID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        tag:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCollectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCollectionSubscription = {
  onCreateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCollectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCollectionSubscription = {
  onUpdateCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCollectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCollectionSubscription = {
  onDeleteCollection?:  {
    __typename: "Collection",
    id: string,
    name: string,
    description?: string | null,
    isPrivate: boolean,
    isPublished: boolean,
    owner: string,
    slug: string,
    posts?:  {
      __typename: "ModelCollectionPostsConnection",
      items:  Array< {
        __typename: "CollectionPosts",
        id: string,
        postID: string,
        collectionID: string,
        post:  {
          __typename: "Post",
          id: string,
          title: string,
          url: string,
          owner: string,
          site?: string | null,
          isUpvoted?: boolean | null,
          upvoteCount?: number | null,
          commentCount?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        collection:  {
          __typename: "Collection",
          id: string,
          name: string,
          description?: string | null,
          isPrivate: boolean,
          isPublished: boolean,
          owner: string,
          slug: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostTagsSubscription = {
  onCreatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostTagsSubscription = {
  onUpdatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostTagsSubscription = {
  onDeletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postID: string,
    tagID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      posts?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCollectionPostsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCollectionPostsSubscription = {
  onCreateCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCollectionPostsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCollectionPostsSubscription = {
  onUpdateCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCollectionPostsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCollectionPostsSubscription = {
  onDeleteCollectionPosts?:  {
    __typename: "CollectionPosts",
    id: string,
    postID: string,
    collectionID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          owner: string,
          parentID?: string | null,
          postID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      upvotes?:  {
        __typename: "ModelUpvoteConnection",
        items:  Array< {
          __typename: "Upvote",
          postID: string,
          owner: string,
          createdAt: string,
          updatedAt: string,
          postUpvotesId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tags?:  {
        __typename: "ModelPostTagsConnection",
        items:  Array< {
          __typename: "PostTags",
          id: string,
          postID: string,
          tagID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      collections?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublished: boolean,
      owner: string,
      slug: string,
      posts?:  {
        __typename: "ModelCollectionPostsConnection",
        items:  Array< {
          __typename: "CollectionPosts",
          id: string,
          postID: string,
          collectionID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type IndexPageQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
  } | null,
};

export type SearchPageQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: Array< SearchablePostSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePostAggregationInput | null > | null,
};

export type SearchPageQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      url: string,
      owner: string,
      site?: string | null,
      isUpvoted?: boolean | null,
      upvoteCount?: number | null,
      commentCount?: number | null,
    } | null >,
  } | null,
};
