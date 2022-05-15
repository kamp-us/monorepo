import { Auth } from "aws-amplify";
import { createPost } from "~/graphql/mutations";
import { AuthUser } from "~/features/auth/user-context";
import { ActionFunction } from "remix";
import { createClient } from "~/graphql/apollo-client";
import { gql } from "@apollo/client";
import { fetchUser } from "~/features/auth/useFetchUser";
import { redirect } from "@remix-run/node";
import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
} from "~/ui-library";
import { withSSR } from "~/features/utils/amplify/withSSR";

export const action: ActionFunction = async ({ request }) => {
  const SSR = withSSR({ request });
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  // const client = await createClient();

  let user: AuthUser | null;
  try {
    user = await fetchUser(SSR.Auth);
  } catch {
    user = null;
  }

  await SSR.API.graphql({
    query: createPost,
    variables: {
      input: {
        title,
        url,
        owner: user?.username,
      },
    },
  });

  // await client.mutate({
  //   mutation: gql(createPost),
  //   variables: {
  //     input: {
  //     },
  //   },
  // });

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
