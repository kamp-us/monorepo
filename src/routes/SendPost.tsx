import React, { useState } from "react";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { createPost } from "../graphql/mutations";
import { CreatePostMutationVariables } from "../API";
import { useUserContext } from "../features/auth/user-context";

const initialState = { title: "", url: "" };

export const SendPost = () => {
  const [formState, setFormState] = useState(initialState);
  const user = useUserContext();

  const sendPost = async () => {
    try {
      if (!formState.url || !formState.title) return;

      const post = { ...formState, owner: user?.username };

      await API.graphql({
        query: createPost,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: post } as CreatePostMutationVariables,
      });
    } catch (e) {
      console.log("error creating post", e);
    }
  };

  const setInput = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <CenteredContainer>
      <input
        onChange={(event) => setInput("title", event.target.value)}
        style={styles.input}
        value={formState.title}
        placeholder="Start typing your title"
      />
      <input
        onChange={(event) => setInput("url", event.target.value)}
        style={styles.input}
        value={formState.url}
        placeholder="Start typing your link"
      />
      <select>
        <option value="">Select a tag</option>
        <option value="">Tag1</option>
        <option value="">Tag2</option>
        <option value="">Tag3</option>
        <option value="">Tag4</option>
        <option value="">Tag5</option>
        <option value="">Tag6</option>
        <option value="">Tag7</option>
      </select>
      <button onClick={sendPost} style={styles.button}>
        send post
      </button>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </CenteredContainer>
  );
};

const styles = {
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
