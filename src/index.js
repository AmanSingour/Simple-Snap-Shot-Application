import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// IMPORTING SEMANTIC UI MIN CSS
import "semantic-ui-css/semantic.min.css";

import { store } from "./services";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
