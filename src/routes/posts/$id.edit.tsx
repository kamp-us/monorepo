import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import normalizeUrl from "normalize-url";
import type { FC } from "react";
import type {
  EditPostPage_GetPostQuery,
  EditPostPage_GetPostQueryVariables,
  UpdatePostMutationVariables,
} from "~/API";
import { canUserEdit } from "~/features/auth/can-user-edit";
import { fetchUser } from "~/features/auth/useFetchUser";
import type { AuthUser } from "~/features/auth/user-context";
import { getSitename } from "~/features/url/get-sitename";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { updatePost } from "~/graphql/mutations";
import { getPost } from "~/graphql/queries";
import { editPostPageQuery } from "~/routes/posts/edit-post-query.server";
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
  post: NonNullable<EditPostPage_GetPostQuery["getPost"]>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  if (!params.id) return null;

  const { Auth, graphql } = withSSR({ request });

  let user: AuthUser;
  try {
    user = await fetchUser(Auth);
  } catch {
    return json(null, { status: 500 });
  }

  const data = await graphql<
    EditPostPage_GetPostQueryVariables,
    EditPostPage_GetPostQuery
  >({
    query: getPost,
    variables: { id: params.id },
  });

  const post = data.getPost;

  if (!canUserEdit(user, post)) {
    return redirect(`/posts/${params.id}`);
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

  const { graphql, Auth } = withSSR({ request });
  const normalized = normalizeUrl(url.toString());
  const postUrl = new URL(normalized);
  const site = getSitename(postUrl);

  let user: AuthUser | null;
  try {
    user = await fetchUser(Auth);
    await graphql<UpdatePostMutationVariables>({
      query: updatePost,
      variables: {
        input: {
          title: title.toString(),
          url: normalized,
          site: site,
          owner: user.username,
          id: params.id,
        },
      },
    });
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
