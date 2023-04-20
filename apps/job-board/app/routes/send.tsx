import {
  Button,
  CenteredContainer,
  GappedBox,
  Input,
  Label,
  styled,
  ToastTitle,
} from "@kampus/ui";
import { ActionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

const FormContainer = styled(CenteredContainer, {
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: 500,
  padding: "$2",
  backgroundColor: "$gray2",
  borderRadius: "$2",
  boxShadow: "$1",
  "@bp1": {
    flexDirection: "row",
    gap: "$3",
  },
});

const GappedInputGroup = styled(GappedBox, {
  flexDirection: "column",
  gap: "$2",
  width: "100%",
  padding: "$2",
  "@bp1": {
    flexDirection: "row",
    gap: "$3",
  },
});

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const title = body.get("title")?.toString();

  console.log("title", title);
  if (!title) {
    return json({ error: "Title is required" }, { status: 400 });
  }

  return json({ title });
}

export default function Send() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post">
      <FormContainer>
        <ToastTitle css={{ fontSize: "$8" }}>İş ilanı paylaş</ToastTitle>

        <GappedInputGroup>
          <Label>Başlık</Label>
          <Input
            placeholder="Başlık giriniz..."
            id="title"
            name="title"
            size="2"
          />
          <Label>Url</Label>
          <Input placeholder="Url giriniz..." id="url" name="url" size="2" />
          <Label>Açıklama</Label>
          <Input
            placeholder="Açıklama giriniz..."
            id="content"
            name="content"
            size="2"
          />
        </GappedInputGroup>
        <Button variant="green" size="2">
          Gönder
        </Button>
      </FormContainer>
    </fetcher.Form>
  );
}
