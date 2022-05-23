/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUpvote = /* GraphQL */ `
  query GetUpvote($postID: ID!, $owner: String!) {
    getUpvote(postID: $postID, owner: $owner) {
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
export const listUpvotes = /* GraphQL */ `
  query ListUpvotes(
    $postID: ID
    $owner: ModelStringKeyConditionInput
    $filter: ModelUpvoteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUpvotes(
      postID: $postID
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
          comments {
            nextToken
          }
          upvotes {
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        postUpvotesId
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      category
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostTag = /* GraphQL */ `
  query GetPostTag($id: ID!) {
    getPostTag(id: $id) {
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
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          comments {
            nextToken
          }
          upvotes {
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
