import { useState } from "react";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { API, Auth } from "aws-amplify";
import { createPost } from "~/graphql/mutations";
import { CreatePostMutationVariables } from "~/API";
import { AuthUser, useUserContext } from "~/features/auth/user-context";
import { Button } from "~/ui-library/layout-components/Button";
import { Input } from "~/ui-library/Input";
import { GappedBox } from "~/ui-library/GappedBox";
import { Box } from "~/ui-library/layout-components/Box";
import { Label } from "~/ui-library/Label";
import { useNavigate } from "react-router-dom";
import { ActionFunction } from "remix";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import { fetchUser } from "~/features/auth/useFetchUser";
import { redirect } from "@remix-run/node";
import { Form } from "~/ui-library/Form";

const initialState = { title: "", url: "" };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  const client = await createClient();

  let user: AuthUser | null = null;
  try {
    user = await fetchUser(Auth);
  } catch {
    user = null;
  }

  await client.mutate({
    mutation: gql(createPost),
    variables: {
      input: {
        title,
        url,
        owner: user?.username,
      },
    },
  });

  return redirect("/");
};

export const Send = () => {
  return (
    <CenteredContainer css={{ width: 400 }}>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="title">Başlık</Label>
          <Input id="title" name="title" />
          <Label htmlFor="url">URL</Label>
          <Input id="url" name="url" />
          <Box>
            <Button type="submit">Gönder</Button>
          </Box>
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Send;
