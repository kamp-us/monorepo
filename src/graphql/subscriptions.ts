/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateUpvote = /* GraphQL */ `
  subscription OnCreateUpvote($owner: String) {
    onCreateUpvote(owner: $owner) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const onUpdateUpvote = /* GraphQL */ `
  subscription OnUpdateUpvote($owner: String) {
    onUpdateUpvote(owner: $owner) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const onDeleteUpvote = /* GraphQL */ `
  subscription OnDeleteUpvote($owner: String) {
    onDeleteUpvote(owner: $owner) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postUpvotesId
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($owner: String) {
    onCreateCollection(owner: $owner) {
      id
      name
      description
      isPrivate
      isPublic
      owner
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($owner: String) {
    onUpdateCollection(owner: $owner) {
      id
      name
      description
      isPrivate
      isPublic
      owner
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($owner: String) {
    onDeleteCollection(owner: $owner) {
      id
      name
      description
      isPrivate
      isPublic
      owner
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
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags($owner: String) {
    onCreatePostTags(owner: $owner) {
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
        createdAt
        updatedAt
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
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags($owner: String) {
    onUpdatePostTags(owner: $owner) {
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
        createdAt
        updatedAt
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
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags($owner: String) {
    onDeletePostTags(owner: $owner) {
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
        createdAt
        updatedAt
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
export const onCreateCollectionPosts = /* GraphQL */ `
  subscription OnCreateCollectionPosts($owner: String) {
    onCreateCollectionPosts(owner: $owner) {
      id
      postID
      collectionID
      post {
        id
        title
        url
        owner
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
export const onUpdateCollectionPosts = /* GraphQL */ `
  subscription OnUpdateCollectionPosts($owner: String) {
    onUpdateCollectionPosts(owner: $owner) {
      id
      postID
      collectionID
      post {
        id
        title
        url
        owner
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
export const onDeleteCollectionPosts = /* GraphQL */ `
  subscription OnDeleteCollectionPosts($owner: String) {
    onDeleteCollectionPosts(owner: $owner) {
      id
      postID
      collectionID
      post {
        id
        title
        url
        owner
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
