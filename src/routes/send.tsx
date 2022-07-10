import { createPost } from "~/graphql/mutations";
import type { AuthUser } from "~/features/auth/user-context";
import type { ActionFunction } from "@remix-run/node";
import { fetchUser } from "~/features/auth/useFetchUser";
import { json, redirect } from "@remix-run/node";
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
import normalizeUrl from "normalize-url";
import type { CreatePostMutationVariables } from "~/API";
import { getSitename } from "~/features/url/get-sitename";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  if (!url || !title) {
    return json(null, { status: 400 });
  }

  const { graphql, Auth } = withSSR({ request });

  const normalized = normalizeUrl(url.toString());
  const postUrl = new URL(normalized);
  const site = getSitename(postUrl);

  let user: AuthUser | null;
  try {
    user = await fetchUser(Auth);
    await graphql<CreatePostMutationVariables>({
      query: createPost,
      variables: {
        input: {
          title: title.toString(),
          url: normalized,
          owner: user.username,
          site: site,
        },
      },
    });
    return redirect("/");
  } catch {
    return json(null, { status: 500 });
  }
};

export const Send = () => {
  return (
    <CenteredContainer>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="title">Başlık</Label>
          <Input id="title" name="title" size="2" />
          <Label htmlFor="url">URL</Label>
          <Input id="url" name="url" size="2" />
          <Box>
            <Button size="2" type="submit" variant="green">
              Gönder
            </Button>
          </Box>
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Send;
