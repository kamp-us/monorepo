import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  ValidationMessage,
} from "@kampus/ui";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import { createPost } from "~/models/post.server";
import { requireUserId } from "~/session.server";
import { validateURL } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  if (!validateURL(url?.toString() ?? "")) {
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
  const fetcher = useFetcher();
  const meta = fetcher.data?.meta;

  const onPaste = (url: string) => {
    const formData = new FormData();
    formData.set("url", url);
    fetcher.submit(formData, { method: "post", action: "/api/parse-meta" });
  };

  return (
    <CenteredContainer>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            name="url"
            size="2"
            onPaste={(e) => {
              onPaste(e.clipboardData.getData("text"));
            }}
          />
          <Label htmlFor="title">Başlık</Label>
          <Input
            id="title"
            name="title"
            size="2"
            defaultValue={meta ? meta.title : ""}
          />
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
