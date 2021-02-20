# Deploy


## Build
> Create a production build

This uses creates a bundled JS file in the `build` directory and copies static assets from `public`.

```sh
$ make build
```

To test the production build locally, run this:

```sh
$ make static
```

That uses the Deno package `abc` to serve the `build` directory.

View in the browser:

- http://localhost

In production, you can use Nginx or a similar tool to serve your build directory. Or use GitHub Pages or Netlify to serve the build directory as static files.


## Clean

> Clean the build directory

```sh
$ make clean
```


## CI flow
> Use Continuous Integration in this project

This project uses _GitHub Actions_ to build and test the app on pushing a commit
to GitHub. The app is not persisted or deploy anywhere.

See the [main.yml](/.github/workflows/main.yml) workflow file and the repo's
_Actions_ tab on GitHub.
