/**
 * Static module.
 *
 * Start a static server in the build output directory. Useful for testing a production build
 * locally before a deploy.
 */
// @ts-ignore TS complains about extension with ts(2691) but Deno needs it.
import { Application } from "./dev_deps.ts";

const APP_PORT = 80;

const app = new Application();

console.log("Starting static server...");

app.file("/", "build/index.html")
  .static("/", "build")
  .start({ port: APP_PORT });

console.log(`Server listening on http://localhost:${APP_PORT}`);
