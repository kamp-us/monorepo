export const editPostPageQuery = /* GraphQL */ `
  query EditPostPage_GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      url
      owner
    }
  }
`;
