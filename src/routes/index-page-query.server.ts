export const indexPageQuery = /* GraphQL */ `
  query IndexPage {
    listPosts {
      items {
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
    }
  }
`;
