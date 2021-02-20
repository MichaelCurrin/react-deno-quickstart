# Purpose

The aim of this project is to demonstrate how to use Deno to develop a React app, in place of using Node.js.

The core of this application is built on using React and React-DOM libraries, which are imported from the JSPM CDN - see [dev.ts](/deps.ts).

The two flows covered here include:

- Server the app with a dev server.

The `abc` Deno package is used in both cases for a server. This package must be kept separate in [dev_deps.ts](/dev_deps.ts). It is not needed at all on the frontend, but also if it is included (and not even used directly) in [deps](/deps.ts), then it adds `Deno` to the `bundle.js` output and this causes undefined errors in the browser.
