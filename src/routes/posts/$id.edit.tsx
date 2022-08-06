import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { FC } from "react";
import type {
  EditPostPage_GetPostQuery,
  EditPostPage_GetPostQueryVariables,
} from "~/API";
import { fetchUser } from "~/features/auth/useFetchUser";
import type { AuthUser } from "~/features/auth/user-context";
import { canUserEdit } from "~/features/auth/can-user-edit";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { getPost } from "~/graphql/queries";
import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
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

export const EditPost: FC = () => {
  const { post } = useLoaderData<LoaderData>();
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
              Gönder
            </Button>
          </Box>
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default EditPost;
