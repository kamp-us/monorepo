import { ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
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
  ValidationMessage,
} from "~/ui-library";
import { validateURL } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  if (!validateURL(url)) {
    return json("Lütfen geçerli bir URL adresi girin.", { status: 400 });
  }

  if (!url || !title) {
    return json("URL veya başlık boş olamaz.", { status: 400 });
  }

  const normalized = normalizeUrl(url.toString());
  const userID = await requireUserId(request);

  try {
    const post = await createPost(title.toString(), normalized, userID);
    return redirect(`/posts/${post.slug}-${post.id}`);
  } catch {
    return json(null, { status: 500 });
  }
};

export const Send = () => {
  const transition = useTransition();
  const error = useActionData();
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
              {transition.submission ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </Box>
          <ValidationMessage
            error={error}
            isSubmitting={transition.state === "submitting"}
          />
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Send;
