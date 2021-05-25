/**
 * Index module.
 */
import { React, ReactDOM } from "../deps.ts";
import { App } from "./App.tsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
