# Features
> A list of features of this project

- Outline of a basic React built with React.
- Two modes for running your React app.
    - Start a dev server which rebuilds on JS changes.
    - Create a production build - then serve it a locally or on your production server.
- Task running through Deno and `make`.
    - See [Makefile](/Makefile) or run `make help` for commands.
    - This flow replaces using `package.json` and `npm/yarn run`.
    - Light on configuration files and dependencies. **No** need to install ESLint, a test runner or TypeScript. These are all built into Deno. Deno also handles `.jsx` files out the box.
- Documentation is included - see [docs/](/docs/).
- GitHub Actions CI is included.
    - See the workflow in [.github/workflows](/.github/workflows/).
    - This builds the app and deploys static assets for serving your React Single-Page Application.
