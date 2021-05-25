# Packages


## Overview

The core of this application is built on using React and React-DOM libraries, which are imported from the JSPM CDN - see [dev.ts](/deps.ts).

The Deno package _Abc_ is used as a dev dependency to serve assets.

## Dev packages used

This is about dev dependencies in set in the [dev_deps.ts](/dev_deps.ts) module.

### Abc

The Deno package _Abc_ is used as a web server here. See the package on Deno land:

- https://deno.land/x/abc

In particular, see the [examples](https://deno.land/x/abc/examples) section.

The `jsx` section was used as a starting point for the dev server of this project.

The `static` directory was used for this project's static server. In Node, there are a ton of options for packages for static servers, some that live reload and don't need a script (so they can be run as CLI tools). You could also use Nginx or Python or VS Code's Live Server extension. Anything to preview the build output locally before deploying it.

This package must be kept separately in the [dev_deps.ts](/dev_deps.ts). It is not needed at all on the frontend. Also, if it _is_ included (and not even used) in [deps](/deps.ts), then unfortunately it gets added to the bundle output including references to `Deno` which break on the frontend as `undefined`.


## Maintaining versions

Make sure that the version numbers of React-related packages all match up exactly in `deps.ts` and `dev_depts.ts`, or you'll get an error.

For example, use `@17.0.1` throughout.
