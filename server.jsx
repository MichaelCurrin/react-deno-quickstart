/**
 * Server module.
 *
 * Start a dev server for React app. This works independently of an HTML page.
 *
 * Note that this relies on App.jsx and not index.jsx as the entrypoint. The rendering in index.jsx
 * is only needed for static.ts module.
 */
import { App } from "./src/App.jsx";
import { React } from "./deps.ts";
import { Application, ReactDOMServer } from "./dev_deps.ts";

const APP_PORT = 8080;

const app = new Application();

app.use((next) =>
  (c) => {
    let e = next(c);
    if (React.isValidElement(e)) {
      e = ReactDOMServer.renderToString(e);
    }

    return e;
  }
);

app.get("/", App)
  .static('/', 'public')
  .start({ port: APP_PORT });

console.log(`Dev server listening on http://localhost:${APP_PORT}`);
