import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import { canUserEdit } from "~/features/auth/can-user-edit";
import { editPost, getPostById, Post } from "~/models/post.server";
import { requireUser } from "~/session.server";
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

type LoaderData = {
  post: Post;
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
  if (params.id === undefined) return json(null, { status: 400 });

  const formData = await request.formData();
  const title = formData.get("title");
  const url = formData.get("url");

  if (!url || !title) {
    return json("URL veya başlık boş olamaz.", { status: 400 });
  }

  const user = await requireUser(request);
  const post = await getPostById(params.id);

  if (!canUserEdit(user, post)) {
    return json(null, { status: 403 });
  }

  try {
    await editPost(params.id, title.toString(), normalizeUrl(url.toString()));
    return redirect("/");
  } catch {
    return json("Bir hata oluştu.", { status: 500 });
  }
};

export const EditPost: FC = () => {
  const { post } = useLoaderData<LoaderData>();
  const transition = useTransition();
  const error = useActionData();
  return (
    <CenteredContainer>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="title">Başlık</Label>
          <Input id="title" name="title" size="2" defaultValue={post.title} />
          <Label htmlFor="url">URL</Label>
          <Input id="url" name="url" size="2" defaultValue={post.url} />
          <Box>
            <Button size="2" type="submit" variant="green">
              {transition.submission ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </Box>
        </GappedBox>
        <ValidationMessage
          error={error}
          isSubmitting={transition.state === "submitting"}
        />
      </Form>
    </CenteredContainer>
  );
};

export default EditPost;
