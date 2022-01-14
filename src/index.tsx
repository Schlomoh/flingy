import React, { StrictMode } from "react";
import { render } from "react-dom";

//style
import "./index.css";

//pages
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
