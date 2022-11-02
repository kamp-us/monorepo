import * as Tabs from "@radix-ui/react-tabs";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserComments } from "~/models/user.server";
import { getUserById } from "~/models/user.server";
import { Box, Button, CenteredContainer, Timeago } from "~/ui-library";

type UserComment = {
  id: string;
  content: string;
  userID: string;
  postID: string;
  parentID: null;
  createdAt: string;
  updatedAt: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  if (!params.userId) return null;
  const user = (await getUserById(params.userId)) || null;
  const comments = (await getUserComments(params.userId)) || null;

  return json({ user, data: comments });
};

export default function ProfilePage() {
  const { user, data } = useLoaderData();

  const comments = data.comments.map((item: UserComment) => {
    return item;
  });

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
          <p>Kullanıcı Adı: {user.username}</p>
        </Box>
        <Box style={{ margin: "0.5rem" }}>
          <p>
            Üyelik Tarihi: <Timeago date={new Date(user.createdAt)} />
          </p>
        </Box>
        <Box style={{ margin: "0.5rem" }}>
          <p>E-mail: {user.email}</p>
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
                Yorumlar
              </Tabs.Trigger>
              {/* <Tabs.Trigger value="tab2" style={{ marginRight:"1rem", padding:".3rem", background:"transparent", border:"1px solid gray", color:"white", borderRadius:".2rem"}}>Upvotes</Tabs.Trigger> */}
            </Tabs.List>
            <Tabs.Content value="tab1">
              <table>
                <thead>
                  <th>*</th>
                  <th style={{ textAlign: "center" }}>Yorumlarınız</th>
                </thead>
                {comments.map((comment: UserComment, index: number) => {
                  return (
                    <tbody>
                      <tr>
                        <td style={{ padding: ".5rem" }}>{index + 1}</td>
                        <td>{comment.content}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
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
