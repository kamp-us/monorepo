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
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import { z } from "zod";
import { requireUser } from "~/authenticator.server";
import { createPost } from "~/models/post.server";
import { getPostLink, validateURL } from "~/utils";

type ActionData = {
  error: {
    message: string;
  };
};

const PostSchema = z.object({
  url: z.string().url("Lütfen geçerli bir URL adresi girin."),
  title: z.string().min(2, "Başlık en az iki harfli olmalıdır."),
  content: z.string().min(1, "İçerik en az 1 harften oluşmalıdır."),
});

type PostFields = z.infer<typeof PostSchema>;

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const fields = Object.fromEntries(formData.entries()) as PostFields;
  const result = PostSchema.safeParse(fields);

  if (!result.success) {
    return json<ActionData>({
      error: { message: result.error.errors[0].message },
    });
  }

  let url = null;
  url = normalizeUrl(fields.url as string);

  try {
    const post = await createPost(fields.title, user.id, url, fields.content);
    // FIXME: getPostLink required PostWithCommentCount,
    // but createPost returns Post
    return redirect(getPostLink(post));
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
