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
  tags?: ModelPostTagConnection | null,
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

export type ModelPostTagConnection = {
  __typename: "ModelPostTagConnection",
  items:  Array<PostTag | null >,
  nextToken?: string | null,
};

export type PostTag = {
  __typename: "PostTag",
  id: string,
  postID?: string | null,
  tagID: string,
  tag?: Tag | null,
  post?: Post | null,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  category: string,
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

export type CreatePostTagInput = {
  id?: string | null,
  postID?: string | null,
  tagID: string,
};

export type ModelPostTagConditionInput = {
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagConditionInput | null > | null,
  or?: Array< ModelPostTagConditionInput | null > | null,
  not?: ModelPostTagConditionInput | null,
};

export type UpdatePostTagInput = {
  id: string,
  postID?: string | null,
  tagID?: string | null,
};

export type DeletePostTagInput = {
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

export type ModelPostTagFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagFilterInput | null > | null,
  or?: Array< ModelPostTagFilterInput | null > | null,
  not?: ModelPostTagFilterInput | null,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostTagMutationVariables = {
  input: CreatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type CreatePostTagMutation = {
  createPostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostTagMutationVariables = {
  input: UpdatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type UpdatePostTagMutation = {
  updatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostTagMutationVariables = {
  input: DeletePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type DeletePostTagMutation = {
  deletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
          __typename: "ModelPostTagConnection",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTagQueryVariables = {
  id: string,
};

export type GetPostTagQuery = {
  getPostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postID?: string | null,
      tagID: string,
      tag?:  {
        __typename: "Tag",
        id: string,
        name: string,
        category: string,
        createdAt: string,
        updatedAt: string,
      } | null,
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
          __typename: "ModelPostTagConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID?: string | null,
        tagID: string,
        tag?:  {
          __typename: "Tag",
          id: string,
          name: string,
          category: string,
          createdAt: string,
          updatedAt: string,
        } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostTagSubscription = {
  onCreatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostTagSubscription = {
  onUpdatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostTagSubscription = {
  onDeletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID?: string | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelPostTagConnection",
        items:  Array< {
          __typename: "PostTag",
          id: string,
          postID?: string | null,
          tagID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
