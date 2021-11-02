import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
