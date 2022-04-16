import { useState } from "react";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { API } from "aws-amplify";
import { createPost } from "../graphql/mutations";
import { CreatePostMutationVariables } from "../API";
import { useUserContext } from "../features/auth/user-context";
import { Button } from "../ui-library/layout-components/Button";
import { Input } from "../ui-library/Input";
import { GappedBox } from "../ui-library/GappedBox";
import { Box } from "../ui-library/layout-components/Box";
import { Label } from "../ui-library/Label";
import { useNavigate } from "react-router-dom";

const initialState = { title: "", url: "" };

export const SendPost = () => {
  const [formState, setFormState] = useState(initialState);
  const user = useUserContext();
  const navigate = useNavigate();

  const sendPost = async () => {
    try {
      if (!formState.url || !formState.title) return;

      const post = { ...formState, owner: user?.username };

      await API.graphql({
        query: createPost,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: post } as CreatePostMutationVariables,
      });
      navigate("/");
    } catch (e) {
      console.log("error creating post", e);
    }
  };

  const setInput = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <CenteredContainer css={{ width: 400 }}>
      <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
        <Label htmlFor="title">Başlık</Label>
        <Input
          id="title"
          onChange={(event) => setInput("title", event.target.value)}
          value={formState.title}
        />
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          onChange={(event) => setInput("url", event.target.value)}
          value={formState.url}
        />
        <Box>
          <Button onClick={sendPost}>Gönder</Button>
        </Box>
      </GappedBox>
    </CenteredContainer>
  );
};
