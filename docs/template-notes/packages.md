# Packages

## Packages used

The Deno package ABC is used as a web server here and it is set in dev dependencies in [dev_deps.ts](/dev_deps.ts).

See the package on Deno land:

- https://deno.land/x/abc

In particular, see the [examples](https://deno.land/x/abc@v1.3.1/examples) section. 

The `jsx` section was used as a starting point for the dev server of this project.

The `static` directory was used for this project's static server. In Node, there are a ton of options for packages for static servers, some that live reload and don't need a script (so they can be run as CLI tools). You could also use Nginx or Python or VS Code Live Server extension. Anything to preview the build output locally before deploying it.


## Maintaining

Make sure that the version numbers of React-related packages all match up exactly in `deps.ts` and `dev_depts.ts`, or you'll get an error. For example, use `@17.0.1` throughout.
