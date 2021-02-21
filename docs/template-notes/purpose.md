# Purpose

The aim of this project is to demonstrate how to use Deno to develop a React app, in place of using Node.js.

The core of this application is built on using React and React-DOM libraries, which are imported from the JSPM CDN - see [dev.ts](/deps.ts).

The two flows covered here include:

- Serve the app with a dev server. No build step. This uses `App` and no HTML file.
- Build a production bundle. This can be served in a static directory of assets, relying on [index.html](/public/index.html) as the base. A static server module is provided for ease of testing this locally.

The `abc` Deno package is used in both cases as a server.

This package must be kept separate in [dev_deps.ts](/dev_deps.ts). It is not needed at all on the frontend, but also if it is included (and not even used directly) in [deps](/deps.ts), then it adds `Deno` to the `bundle.js` output and this causes undefined errors in the browser.
