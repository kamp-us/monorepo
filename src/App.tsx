import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Activation,
  Home,
  Login,
  SendPost,
  SignUp,
  SinglePost,
} from "./routes";
import { useFetchUser } from "./features/auth/useFetchUser";
import { UserContext } from "./features/auth/user-context";
import { Topnav } from "./ui-library/topnav/Topnav";
import { ThemeProvider } from "./ui-library/ThemeProvider";

export const App = () => {
  const [user] = useFetchUser();

  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
        <ThemeProvider>
          <BrowserRouter>
            <Topnav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="send" element={<SendPost />} />
              <Route path="posts/:id" element={<SinglePost />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="activate" element={<Activation />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

export default App;
