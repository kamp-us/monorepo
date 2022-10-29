import * as Tabs from "@radix-ui/react-tabs";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserComments } from "~/models/user.server";
import { getUserById } from "~/models/user.server";
import { Box, Button, CenteredContainer } from "~/ui-library";

export const loader: LoaderFunction = async ({ request, params }) => {
  console.log("Profile loader function:", params);
  if (!params.userId) return null;
  const user = (await getUserById(params.userId)) || null;
  const comments = (await getUserComments(params.userId)) || null;
  console.log("loader:", comments);
  return json({ user, data: comments });
};

export default function ProfilePage() {
  const { user, data } = useLoaderData();

  const comments = data.map((item: any) => {
    return item.comments;
  });

  // const upvotes = data.map((item: any) => {
  //   return item.upvotes;
  // });

  const getUpvotedPost = () => {};

  return (
    <CenteredContainer
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "2rem",
        borderRadius: "1.2rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          width: "100%",
        }}
      >
        <Box style={{ margin: "0.5rem" }}>
          <p>User: {user.username}</p>
        </Box>
        <Box style={{ margin: "0.5rem" }}>
          <p>Created: 27-10-2022</p>
        </Box>
        <Box style={{ margin: "0.5rem" }}>
          <p>About: ajsdjasds</p>
        </Box>
        <Box style={{ margin: "0.5rem" }}>
          <p>{user.email}</p>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "5rem",
          color: "white",
          width: "100%",
        }}
      >
        <Box style={{ margin: "0.5rem" }}>
          <Tabs.Root defaultValue="tab1" orientation="vertical">
            <Tabs.List
              aria-label="tabs example"
              style={{ marginBottom: "1rem" }}
            >
              <Tabs.Trigger
                value="tab1"
                style={{
                  marginRight: "1rem",
                  padding: ".3rem",
                  background: "transparent",
                  border: "1px solid gray",
                  color: "white",
                  borderRadius: ".2rem",
                }}
              >
                Comments
              </Tabs.Trigger>
              {/* <Tabs.Trigger value="tab2" style={{ marginRight:"1rem", padding:".3rem", background:"transparent", border:"1px solid gray", color:"white", borderRadius:".2rem"}}>Upvotes</Tabs.Trigger> */}
            </Tabs.List>
            <Tabs.Content value="tab1">
              {comments.map((item: any) => {
                return item.map((comment: { id: string; content: string }) => {
                  console.log("comment:", comment);
                  return (
                    <div key={comment.id}>
                      <p>{comment.content}</p>
                    </div>
                  );
                });
              })}
            </Tabs.Content>
            {/* <Tabs.Content value="tab2">
            {upvotes.map((item: any) => {
                return item.map((upvote: { id: string; postID: string;}) => {
                  return (
                    <div key={upvote.id}>
                      <p>{upvote.postID}</p>
                    </div>
                  );
                });
              })}
            </Tabs.Content> */}
          </Tabs.Root>
        </Box>
      </Box>
    </CenteredContainer>
  );
}
