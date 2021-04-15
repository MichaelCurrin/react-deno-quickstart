# Deploy


## Build
> Create a production build

```sh
$ make build
```

That uses creates a bundled JS file in the `build` directory and minifies it so its about a third of the size.

That also copies static assets from `public`.


## Server production build locally

You can test the production build locally, before deploying.

Run this:

```sh
$ make static
```

Open in the browser on port `80` like this:

- http://localhost

This will do the following for you.

1. Clean and build the `build/` directory.
2. Serve that output directory as static assets, using the [static.ts](/static.ts) script and the ABC Deno library.

If you prefer more control,

1. Run `make clean build` to run both commands.
2. Start a dev server in the `build` directory using your preferred choice - see this [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95) for ideas.

For remote production environments, don't use Deno for serving. Rather use one of these options:

- Use _Nginx_ or a similar tool to serve your build directory.
- Or use a service like GitHub Pages or Netlify.


## CI flow
> Use Continuous Integration in this project

This project uses _GitHub Actions_ to build and test the app on pushing a commit
to GitHub. The app is not persisted or deploy anywhere.

See the [main.yml](/.github/workflows/main.yml) workflow file and the repo's
_Actions_ tab on GitHub.
