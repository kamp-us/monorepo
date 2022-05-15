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
import { createClient } from "~/graphql/apollo-client";
import { AuthUser } from "~/features/auth/user-context";
import { fetchUser } from "~/features/auth/useFetchUser";
import { Auth } from "aws-amplify";
import { gql } from "@apollo/client";
import { createCollection } from "~/graphql/mutations";
import { json, redirect } from "remix";
import { Checkbox, CheckboxIndicator } from "~/ui-library/Checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { withSSR } from "~/features/utils/amplify/withSSR";

export const action: ActionFunction = async ({ request }) => {
  const SSR = withSSR({ request });
  const formData = await request.formData();
  const name = formData.get("name");
  const isPrivate = formData.get("isPrivate") === "on";

  if (!name) {
    return;
  }

  const client = await createClient();

  let user: AuthUser | null;
  try {
    user = await fetchUser(SSR.Auth);
  } catch {
    user = null;
  }
  console.log(user);

  if (!user) {
    return json(null, { status: 500 });
  }

  const input = { name, isPrivate, isPublic: !isPrivate, owner: user.username };
  console.log(input, "INPUT");

  await client.mutate({
    mutation: gql(createCollection),
    variables: {
      input,
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
