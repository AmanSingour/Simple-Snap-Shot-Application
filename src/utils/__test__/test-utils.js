import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../services/reducers";

import { render as rtlRender } from "@testing-library/react";

// REDUX PROVIDER SETUP

function render(
  ui,
  {
    initialState,
    store = createStore(reducers, initialState),
    ...renderOptions
  } = {}
) {

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
