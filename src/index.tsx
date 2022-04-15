import ReactDOM from "react-dom";
import "./index.css";
import "./configureAmplify";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalStyles } from "./ui-library/globalStyles";
import "./index.css";

globalStyles();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
