import {
  Box,
  Button,
  CenteredContainer,
  GappedBox,
  Input,
  Label,
  Textarea,
  ValidationMessage,
} from "@kampus/ui";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import { createPost } from "~/models/post.server";
import { requireUserId } from "~/session.server";
import { validate, validateURL } from "~/utils";

type ActionData = {
  error: {
    message: string;
  };
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const formUrl = formData.get("url")?.toString();
  const userID = await requireUserId(request);

  if (!validate(title)) {
    return json<ActionData>({
      error: { message: "Başlık en az iki harfli olmalıdır." },
    });
  }

  if (!validate(content) && !validate(formUrl)) {
    return json<ActionData>({
      error: {
        message:
          "En az 1 harften oluşacak içerik veya URL adresi eklenmelidir.",
      },
    });
  }

  let url = null;
  if (validate(formUrl)) {
    if (!validateURL(formUrl)) {
      return json<ActionData>({
        error: { message: "Lütfen geçerli bir URL adresi girin." },
      });
    } else {
      url = normalizeUrl(formUrl as string);
    }
  }

  let body = validate(content) ? content : null;

  try {
    const post = await createPost(title, userID, url, body);
    return redirect(`/posts/${post.slug}/${post.id}`);
  } catch (e) {
    return json(e, { status: 500 });
  }
};

const Send = () => {
  const transition = useTransition();
  const fetcher = useFetcher();
  const meta = fetcher.data?.meta;
  const error = fetcher.data?.error;

  const fetchMetaTags = (url: string) => {
    if (validateURL(url)) {
      const formData = new FormData();
      formData.set("url", url);
      fetcher.submit(formData, { method: "post", action: "/api/parse-meta" });
    }
  };

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <fetcher.Form method="post">
        <GappedBox css={{ flexDirection: "column" }}>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            name="url"
            size="2"
            onPaste={(e) => {
              fetchMetaTags(e.clipboardData.getData("text"));
            }}
            onBlur={(e) => {
              fetchMetaTags(e.target.value);
            }}
          />
          <Label htmlFor="title">Başlık</Label>
          <Input
            id="title"
            name="title"
            size="2"
            defaultValue={meta ? meta.title : ""}
          />
          <Label htmlFor="content">İçerik</Label>
          <Textarea
            css={{ width: "auto", cursor: "text" }}
            name="content"
            rows={4}
          />
          <Box>
            <Button size="2" type="submit" variant="green">
              {transition.submission ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </Box>
          {error && (
            <ValidationMessage
              error={error.message}
              isSubmitting={transition.state === "submitting"}
            />
          )}
        </GappedBox>
      </fetcher.Form>
    </CenteredContainer>
  );
};

export default Send;
