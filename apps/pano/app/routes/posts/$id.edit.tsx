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
import { z } from "zod";
import { requireUser } from "~/authenticator.server";
import { canUserEdit } from "~/features/auth/can-user-edit";
import type { PostWithCommentCount } from "~/models/post.server";
import { editPost, getPostById } from "~/models/post.server";

type LoaderData = {
  post: PostWithCommentCount;
};

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
  const fields = Object.fromEntries(formData.entries()) as PostFields;
  const result = PostSchema.safeParse(fields);

  if (!result.success) {
    return json<ActionData>({
      error: { message: result.error.errors[0].message },
    });
  }

  let url = null;
  url = normalizeUrl(fields.url as string);

  const user = await requireUser(request);
  const post = await getPostById(params.id);

  if (!canUserEdit(user, post)) {
    return json(null, { status: 403 });
  }

  try {
    await editPost(params.id, fields.title, url, fields.content);
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
          <Input id="url" name="url" size="2" defaultValue={post.url ?? ""} />
          <Label htmlFor="title">Başlık</Label>
          <Input id="title" name="title" size="2" defaultValue={post.title} />
          <Label htmlFor="content">İçerik</Label>
          <Textarea
            css={{ width: "auto", cursor: "text" }}
            name="content"
            rows={4}
            defaultValue={post.content ?? ""}
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
