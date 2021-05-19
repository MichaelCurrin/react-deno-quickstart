# Packages

## Packages used

The Deno package ABC is used as a static server and is set in dev dependencies in [dev_deps.ts](/dev_deps.ts).

- https://deno.land/x/abc

In particular, see the [examples](https://deno.land/x/abc@v1.3.1/examples) section.

In Node, there are a ton of options for packages for static servers, some that live reload and don't need a script. You could also use Nginx or Python or VS Code Live Server extension. Anything to preview the build output locally before deploying it.


## Maintaining

Make sure that the version numbers of React-related packages all match up exactly in `deps.ts` and `dev_depts.ts`, or you'll get an error. For example, use `@17.0.1` throughout.
