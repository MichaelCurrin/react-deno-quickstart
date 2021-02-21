/**
 * Index module.
 *
 * When running a build, this is the entry point, which then uses `App` internally.
 *
 * When running a dev server, we can this skip minimal index module and use `App` directly as a root
 * path. That is based on a pattern I found and that works.
 */
import { App } from "./App.tsx";
import { React, ReactDOM } from "../deps.ts";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // deno-lint-ignore no-undef
  document.getElementById("root"),
);
