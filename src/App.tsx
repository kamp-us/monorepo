import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Activation,
  Home,
  Login,
  SendPost,
  SignUp,
  SinglePost,
} from "./routes";
import { Topnav } from "./ui-library/topnav/Topnav";
import { ThemeProvider } from "./ui-library/ThemeProvider";

export const App = () => {
  return (
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
  );
};

export default App;
