import React, { StrictMode } from "react";
import { render } from "react-dom";

//style
import "./index.css";

//pages
import App from "./App";
import { Provider } from "react-redux";
import store from "./utils/stateManagement/store";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
