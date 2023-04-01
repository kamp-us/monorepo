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
import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useLoaderData, useTransition } from "@remix-run/react";
import parser from "html-metadata-parser";
import normalizeUrl from "normalize-url";
import { useEffect, useRef } from "react";
import { requireUser } from "~/authenticator.server";
import { createPost } from "~/models/post.server";
import { getPostLink, validate, validateURL } from "~/utils";

type ActionData = {
  error: {
    message: string;
  };
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const urlParam = url.searchParams.get("url");

  try {
    const metaTags = await parser(urlParam ?? "");
    return json(
      { error: "", url: urlParam, ...metaTags },
      {
        status: 200,
      }
    );
  } catch (error) {
    return json(
      {
        error: "Linkten meta bilgileri alınamadı.",
        url: urlParam,
        meta: { title: "" },
      },
      { status: 500 }
    );
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const formUrl = formData.get("url")?.toString();
  const user = await requireUser(request);

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
    const post = await createPost(title, user.id, url, body);
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
  const loaderData = useLoaderData<typeof loader>();
  const titleRef = useRef<HTMLInputElement>(null);

  const fetchMetaTags = (url: string) => {
    if (validateURL(url)) {
      const formData = new FormData();
      formData.set("url", url);
      fetcher.submit(formData, { method: "post", action: "/api/parse-meta" });
    }
  };

  useEffect(() => {
    // Special case: if a meta title fetched using url query param,
    // and a newer meta title value is being fetched, title input's
    // value needs to be updated manually since default value
    // comes populated on server-side before the fetcher fetches
    // meta title therefore will not update.
    if (loaderData.meta?.title && titleRef.current && meta?.title)
      titleRef.current.value = meta?.title;
  }, [meta?.title, loaderData.meta?.title]);

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <fetcher.Form method="post">
        <GappedBox css={{ flexDirection: "column" }}>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            name="url"
            size="2"
            defaultValue={loaderData.url ?? ""}
            onPaste={(e) => {
              fetchMetaTags(e.clipboardData.getData("text"));
            }}
            onBlur={(e) => {
              fetchMetaTags(e.target.value);
            }}
          />
          <Label htmlFor="title">Başlık</Label>
          <Input
            ref={titleRef}
            id="title"
            name="title"
            size="2"
            defaultValue={loaderData.meta?.title ?? meta?.title}
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
