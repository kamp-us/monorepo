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
            isPublished
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
            isPublished
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
            isPublished
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      id
      name
      description
      isPrivate
      isPublished
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
            isPublished
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
      id
      name
      description
      isPrivate
      isPublished
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
            isPublished
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
      id
      name
      description
      isPrivate
      isPublished
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
            isPublished
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
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags(
    $input: CreatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    createPostTags(input: $input, condition: $condition) {
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
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags(
    $input: UpdatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    updatePostTags(input: $input, condition: $condition) {
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
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags(
    $input: DeletePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    deletePostTags(input: $input, condition: $condition) {
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
export const createCollectionPosts = /* GraphQL */ `
  mutation CreateCollectionPosts(
    $input: CreateCollectionPostsInput!
    $condition: ModelCollectionPostsConditionInput
  ) {
    createCollectionPosts(input: $input, condition: $condition) {
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
        isPublished
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
export const updateCollectionPosts = /* GraphQL */ `
  mutation UpdateCollectionPosts(
    $input: UpdateCollectionPostsInput!
    $condition: ModelCollectionPostsConditionInput
  ) {
    updateCollectionPosts(input: $input, condition: $condition) {
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
        isPublished
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
export const deleteCollectionPosts = /* GraphQL */ `
  mutation DeleteCollectionPosts(
    $input: DeleteCollectionPostsInput!
    $condition: ModelCollectionPostsConditionInput
  ) {
    deleteCollectionPosts(input: $input, condition: $condition) {
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
        isPublished
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
