/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      url
      owner
      site
      isUpvoted
      upvoteCount
      commentCount
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      upvotes {
        items {
          postID
          owner
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          postUpvotesId
        }
        nextToken
      }
      tags {
        items {
          id
          postID
          tagID
          tag {
            id
            name
            category
            createdAt
            updatedAt
          }
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      url
      owner
      site
      isUpvoted
      upvoteCount
      commentCount
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      upvotes {
        items {
          postID
          owner
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          postUpvotesId
        }
        nextToken
      }
      tags {
        items {
          id
          postID
          tagID
          tag {
            id
            name
            category
            createdAt
            updatedAt
          }
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      url
      owner
      site
      isUpvoted
      upvoteCount
      commentCount
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      upvotes {
        items {
          postID
          owner
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          postUpvotesId
        }
        nextToken
      }
      tags {
        items {
          id
          postID
          tagID
          tag {
            id
            name
            category
            createdAt
            updatedAt
          }
          post {
            id
            title
            url
            owner
            site
            isUpvoted
            upvoteCount
            commentCount
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      owner
      parentID
      postID
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      owner
      parentID
      postID
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      owner
      parentID
      postID
      comments {
        items {
          id
          content
          owner
          parentID
          postID
          comments {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUpvote = /* GraphQL */ `
  mutation CreateUpvote(
    $input: CreateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    createUpvote(input: $input, condition: $condition) {
      postID
      owner
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const updateUpvote = /* GraphQL */ `
  mutation UpdateUpvote(
    $input: UpdateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    updateUpvote(input: $input, condition: $condition) {
      postID
      owner
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const deleteUpvote = /* GraphQL */ `
  mutation DeleteUpvote(
    $input: DeleteUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    deleteUpvote(input: $input, condition: $condition) {
      postID
      owner
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      category
      createdAt
      updatedAt
    }
  }
`;
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        category
        createdAt
        updatedAt
      }
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        category
        createdAt
        updatedAt
      }
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        category
        createdAt
        updatedAt
      }
      post {
        id
        title
        url
        owner
        site
        isUpvoted
        upvoteCount
        commentCount
        comments {
          items {
            id
            content
            owner
            parentID
            postID
            createdAt
            updatedAt
          }
          nextToken
        }
        upvotes {
          items {
            postID
            owner
            createdAt
            updatedAt
            postUpvotesId
          }
          nextToken
        }
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
