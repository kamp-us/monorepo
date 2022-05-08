/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  url: string,
  owner: string,
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  isUpvoted?: ModelBooleanInput | null,
  upvoteCount?: ModelIntInput | null,
  commentCount?: ModelIntInput | null,
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
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
  comments?: ModelCommentConnection | null,
  upvotes?: ModelUpvoteConnection | null,
  tags?: ModelPostTagsConnection | null,
  collections?: ModelCollectionPostsConnection | null,
  createdAt: string,
  updatedAt: string,
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
  isPublic: boolean,
  owner: string,
  posts?: ModelCollectionPostsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  url?: string | null,
  owner?: string | null,
  isUpvoted?: boolean | null,
  upvoteCount?: number | null,
  commentCount?: number | null,
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
  isPublic: boolean,
  owner: string,
};

export type ModelCollectionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  isPublic?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCollectionConditionInput | null > | null,
  or?: Array< ModelCollectionConditionInput | null > | null,
  not?: ModelCollectionConditionInput | null,
};

export type UpdateCollectionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  isPrivate?: boolean | null,
  isPublic?: boolean | null,
  owner?: string | null,
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
  isUpvoted?: ModelBooleanInput | null,
  upvoteCount?: ModelIntInput | null,
  commentCount?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
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
  isPublic?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
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
          isPublic: boolean,
          owner: string,
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
          isPublic: boolean,
          owner: string,
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
          isPublic: boolean,
          owner: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
          isPublic: boolean,
          owner: string,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      createdAt: string,
      updatedAt: string,
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
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
      isPublic: boolean,
      owner: string,
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
      createdAt: string,
      updatedAt: string,
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
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
        tags?:  {
          __typename: "ModelPostTagsConnection",
          nextToken?: string | null,
        } | null,
        collections?:  {
          __typename: "ModelCollectionPostsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      collection:  {
        __typename: "Collection",
        id: string,
        name: string,
        description?: string | null,
        isPrivate: boolean,
        isPublic: boolean,
        owner: string,
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
          isPublic: boolean,
          owner: string,
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
          isPublic: boolean,
          owner: string,
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
          isPublic: boolean,
          owner: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
    isPublic: boolean,
    owner: string,
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
          isPublic: boolean,
          owner: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
      createdAt: string,
      updatedAt: string,
    },
    collection:  {
      __typename: "Collection",
      id: string,
      name: string,
      description?: string | null,
      isPrivate: boolean,
      isPublic: boolean,
      owner: string,
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
