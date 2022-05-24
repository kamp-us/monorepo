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
      createdAt
      updatedAt
      tags {
        items {
          id
          postID
          tagID
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
          tag {
            id
            name
            category
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      collections {
        items {
          id
          postID
          collectionID
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
          collection {
            id
            name
            description
            isPrivate
            isPublic
            owner
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        createdAt
        updatedAt
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        collections {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        createdAt
        updatedAt
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        collections {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
          createdAt
          updatedAt
          tags {
            nextToken
          }
          collections {
            nextToken
          }
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
      posts {
        items {
          id
          postID
          tagID
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
          tag {
            id
            name
            category
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        posts {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
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
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      description
      isPrivate
      isPublic
      owner
      slug
      posts {
        items {
          id
          postID
          collectionID
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
          collection {
            id
            name
            description
            isPrivate
            isPublic
            owner
            slug
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isPrivate
        isPublic
        owner
        slug
        posts {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
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
export const getPostTags = /* GraphQL */ `
  query GetPostTags($id: ID!) {
    getPostTags(id: $id) {
      id
      postID
      tagID
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
        createdAt
        updatedAt
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        collections {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      tag {
        id
        name
        category
        posts {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        tagID
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
          createdAt
          updatedAt
          tags {
            nextToken
          }
          collections {
            nextToken
          }
        }
        tag {
          id
          name
          category
          posts {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCollectionPosts = /* GraphQL */ `
  query GetCollectionPosts($id: ID!) {
    getCollectionPosts(id: $id) {
      id
      postID
      collectionID
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
        createdAt
        updatedAt
        tags {
          items {
            id
            postID
            tagID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        collections {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      collection {
        id
        name
        description
        isPrivate
        isPublic
        owner
        slug
        posts {
          items {
            id
            postID
            collectionID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCollectionPosts = /* GraphQL */ `
  query ListCollectionPosts(
    $filter: ModelCollectionPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        collectionID
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
          createdAt
          updatedAt
          tags {
            nextToken
          }
          collections {
            nextToken
          }
        }
        collection {
          id
          name
          description
          isPrivate
          isPublic
          owner
          slug
          posts {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
