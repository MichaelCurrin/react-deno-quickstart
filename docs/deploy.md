# Deploy


## Build
> Create a production build

```sh
$ make build
```

That uses creates a bundled JS file in the `build` directory and minifies it so its about a third of the size.

That also copies static assets from `public`.


## Test build

To test the production build locally, run this. This runs the build step for you.

```sh
$ make static
```

That uses the Deno package `abc` to serve the `build` directory.

View in the browser:

- http://localhost

In production, you can use Nginx or a similar tool to serve your build directory. Or use GitHub Pages or Netlify to serve the build directory as static files.


## CI flow
> Use Continuous Integration in this project

This project uses _GitHub Actions_ to build and test the app on pushing a commit
to GitHub. The app is not persisted or deploy anywhere.

See the [main.yml](/.github/workflows/main.yml) workflow file and the repo's
_Actions_ tab on GitHub.
