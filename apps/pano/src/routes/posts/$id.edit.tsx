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
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import invariant from "tiny-invariant";
import { canUserEdit } from "~/features/auth/can-user-edit";
import type { PostWithCommentCount } from "~/models/post.server";
import { editPost, getPostById } from "~/models/post.server";
import { requireUser } from "~/session.server";
import { validate, validateURL } from "~/utils";

type LoaderData = {
  post: PostWithCommentCount;
};

type ActionData = {
  error: {
    message: string;
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  if (!params.id) return null;

  const user = await requireUser(request);
  const post = await getPostById(params.id);

  if (!canUserEdit(user, post)) {
    return redirect(`/posts/${params.slug}-${params.id}`);
  }

  return json<LoaderData>({ post });
};

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.id, "Post id is required");

  const formData = await request.formData();
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const formUrl = formData.get("url")?.toString();

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
      url = normalizeUrl(formUrl);
    }
  }

  let body = validate(content) ? content : null;

  const user = await requireUser(request);
  const post = await getPostById(params.id);

  if (!canUserEdit(user, post)) {
    return json(null, { status: 403 });
  }

  try {
    await editPost(params.id, title, url, body);
    return redirect("/");
  } catch {
    return json("Bir hata oluştu.", { status: 500 });
  }
};

export const EditPost: FC = () => {
  const { post } = useLoaderData<LoaderData>();
  const transition = useTransition();
  const data = useActionData<ActionData>();
  const error = data?.error;
  return (
    <CenteredContainer>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="url">URL</Label>
          <Input id="url" name="url" size="2" defaultValue={post.url} />
          <Label htmlFor="title">Başlık</Label>
          <Input id="title" name="title" size="2" defaultValue={post.title} />
          <Label htmlFor="content">İçerik</Label>
          <Textarea
            css={{ width: "auto", cursor: "text", resize: "both" }}
            name="content"
            rows={4}
            defaultValue={post.content}
          />
          <Box>
            <Button size="2" type="submit" variant="green">
              {transition.submission ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </Box>
        </GappedBox>
        {error && (
          <ValidationMessage
            error={error.message}
            isSubmitting={transition.state === "submitting"}
          />
        )}
      </Form>
    </CenteredContainer>
  );
};

export default EditPost;
