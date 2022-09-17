import { ActionFunction, json, redirect } from "@remix-run/node";
import normalizeUrl from "normalize-url";
import { createPost } from "~/models/post.server";
import { requireUserId } from "~/session.server";
import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
} from "~/ui-library";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  if (!url || !title) {
    return json(null, { status: 400 });
  }

  const normalized = normalizeUrl(url.toString());
  const userID = await requireUserId(request);

  try {
    const post = await createPost(title.toString(), normalized, userID);
    return redirect(`/posts/${post.id}`);
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
