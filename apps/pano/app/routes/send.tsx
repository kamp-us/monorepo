import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  Textarea,
  ValidationMessage,
} from "@kampus/ui";
import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useTransition } from "@remix-run/react";
import parser from "html-metadata-parser";
import { useEffect, useRef } from "react";
import { z } from "zod";
import { requireUser } from "~/authenticator.server";
import type { inferSafeParseErrors } from "~/features/zod/utils";
import { validateURLWithZod } from "~/features/zod/utils";
import { createPost } from "~/models/post.server";
import { getPostLink } from "~/utils";

const SendSchema = z
  .object({
    title: z.string().min(2, { message: "Başlık en az iki harfli olmalıdır." }),
    content: z.string().nullable(),
    url: z.union([
      z.string().url({ message: "Lütfen geçerli bir URL adresi girin." }).nullable(),
      z.literal(""),
    ]),
  })
  .refine((obj) => obj.content || obj.url, {
    message: "Bir içerik veya URL adresi eklenmelidir.",
  });

type SendFields = z.infer<typeof SendSchema>;
type SendFieldsErrors = inferSafeParseErrors<typeof SendSchema>;

type ActionData = {
  fields: SendFields;
  errors?: SendFieldsErrors;
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
const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData.entries()) as SendFields;
  const user = await requireUser(request);

  const result = SendSchema.safeParse(fields);
  if (!result.success) {
    return badRequest({
      fields,
      errors: result.error.flatten(),
    });
  }

  try {
    const post = await createPost(fields.title, user.id, fields.url, fields.content);
    // FIXME: getPostLink required PostWithCommentCount,
    // but createPost returns Post
    return redirect(getPostLink(post));
  } catch (e) {
    return json(e, { status: 500 });
  }
};

const Send = () => {
  const transition = useTransition();
  const fetcher = useFetcher<typeof loader>();
  const { meta, url } = fetcher.data ?? {};
  const actionData = useActionData<ActionData>();
  const { fieldErrors, formErrors } = actionData?.errors ?? {};
  const titleRef = useRef<HTMLInputElement>(null);
  const isSubmitting = transition.state === "submitting";

  const fetchMetaTags = (url: string) => {
    if (validateURLWithZod(url)) {
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
    if (titleRef.current && meta?.title) titleRef.current.value = meta.title;
  }, [meta?.title]);

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column" }}>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            name="url"
            size="2"
            defaultValue={url ?? ""}
            onPaste={(e) => {
              fetchMetaTags(e.clipboardData.getData("text"));
            }}
            // FIXME: We shouldn't fetch meta tags again on blur if the url is not changed
            onBlur={(e) => {
              fetchMetaTags(e.target.value);
            }}
          />
          {fieldErrors?.url && (
            <ValidationMessage error={fieldErrors.url[0]} isSubmitting={isSubmitting} />
          )}
          <Label htmlFor="title">Başlık</Label>
          <Input ref={titleRef} id="title" name="title" size="2" defaultValue={meta?.title} />
          {fieldErrors?.title && (
            <ValidationMessage error={fieldErrors.title[0]} isSubmitting={isSubmitting} />
          )}
          <Label htmlFor="content">İçerik</Label>
          <Textarea css={{ width: "auto", cursor: "text" }} name="content" rows={4} />
          {fieldErrors?.content && (
            <ValidationMessage error={fieldErrors.content[0]} isSubmitting={isSubmitting} />
          )}
          <Box>
            <Button size="2" type="submit" variant="green">
              {transition.submission ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </Box>
          {formErrors && <ValidationMessage error={formErrors[0]} isSubmitting={isSubmitting} />}
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Send;
