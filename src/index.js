import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import Main from "./Main";
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
