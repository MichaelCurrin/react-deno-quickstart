# Deploy


## Build
> Create a production build

```sh
$ make build
```

That uses creates a bundled JS file in the `build` directory and minifies it so it is about a third of the size. That also copies static assets from [public](/public/).


## CI flow
> Use Continuous Integration in this project

This project uses _GitHub Actions_ as the CI too. Push a commit to GitHub and the workflow will to build and test the app and finally deploy to the `gh-pages` branch.

See the [main.yml](/.github/workflows/main.yml) workflow file and the repo's _Actions_ tab on GitHub.


## Hosting

The output directory from the [Build](#build) section can be served as static content using Nginx or a static hosting service like Netlify or GitHub Pages. You do not need Deno running host this site.


To set up GitHub Pages:

1. Go to your repo's _Settings_.
2. Then to _Pages_.
3. Enable hosting on the `gh-pages` branch's root.
4. Check the URL that is provided to see your site.
