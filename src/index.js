import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// IMPORTING SEMANTIC UI MIN CSS
import "semantic-ui-css/semantic.min.css";

import { store } from "./services";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);