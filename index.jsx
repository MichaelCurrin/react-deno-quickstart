import { App } from "./App.jsx";
import { React, ReactDOM } from "./deps.ts";

// TODO: Convert to .tsx.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // deno-lint-ignore no-undef
  document.getElementById("root"),
);
