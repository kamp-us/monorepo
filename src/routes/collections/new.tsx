import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  Textarea,
} from "~/ui-library";
import { ActionFunction } from "@remix-run/node";
import { fetchUser } from "~/features/auth/useFetchUser";
import { createCollection } from "~/graphql/mutations";
import { redirect } from "remix";
import { Checkbox, CheckboxIndicator } from "~/ui-library/Checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { withSSR } from "~/features/utils/amplify/withSSR";
import {
  CreateCollectionMutation,
  CreateCollectionMutationVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
} from "~/API";
import slugify from "slugify";
import { listCollections } from "~/graphql/queries";
import invariant from "tiny-invariant";

export const action: ActionFunction = async ({ request }) => {
  const { Auth, graphql } = withSSR({ request });
  const formData = await request.formData();

  const formName = formData.get("name");
  invariant(formName, "name is required");

  const name = formName.toString();

  const isPrivate = formData.get("isPrivate") === "on";

  if (!name) {
    return;
  }

  const user = await fetchUser(Auth);

  const input = { name, isPrivate, isPublic: !isPrivate, owner: user.username };
  console.log(input, "INPUT");

  let slug = slugify(name);

  const withSlug = await graphql<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >({
    query: listCollections,
    variables: {
      filter: {
        slug: { eq: slug },
        owner: { eq: user.username },
      },
    },
  });

  const hasSlug = (withSlug.listCollections?.items?.length ?? 0) > 0;
  console.log(">>>>", hasSlug, withSlug);
  if (hasSlug) {
    slug = slugify(name + "-" + Date.now().toString(36));
  }

  await graphql<CreateCollectionMutation, CreateCollectionMutationVariables>({
    query: createCollection,
    variables: {
      input: {
        isPrivate,
        name: name.toString(),
        owner: user.username,
        isPublished: false,
        slug,
      },
    },
  });

  return redirect("/collections");
};

const NewCollectionPage = () => {
  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <Form method="post" css={{ width: "100%" }}>
        <GappedBox css={{ flexDirection: "column", gap: 10 }}>
          <Label htmlFor="name">Koleksiyonun adı</Label>
          <Input
            id="name"
            name="name"
            placeholder="Javascript hakkında beğendiklerim"
          />
          <Label htmlFor="description">Koleksiyonun açıklaması</Label>
          <Textarea
            name="description"
            rows={4}
            id="description"
            placeholder="Koleksiyonun hakkında bir kaç kelime yaz"
            css={{ maxWidth: "100%", minWidth: "50%" }}
          />
          <GappedBox>
            <GappedBox css={{ alignItems: "center" }}>
              <Checkbox id="isPrivate" name="isPrivate">
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label htmlFor="isPrivate">Gizli Koleksiyon</Label>
            </GappedBox>
          </GappedBox>
          <Box>
            <Button type="submit">Koleksiyonu oluştur</Button>
          </Box>
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default NewCollectionPage;
