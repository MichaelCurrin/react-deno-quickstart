# Limitations


## Optimization

In production, you'd probably want to use a minification tool to minify your JS bundle. Deno and Node do not have anything built-in to support this but you can find package to do this.


## Styling

In a React Node project, you are able to do this:

```javascript
import "./App.css"
```

And that imports CSS styles which get added as styling scope to the component.

Deno doesn't seem to have support for this. Perhaps a package to import CSS as JS modules would work.

I tried adding a shim so that TypeScript accepts importing a CSS file, but I didn't get far with that.s


## React versions

Normally you'd switch between using production and development versions of React. Where the former is optimized while the latter gives a better developer experience.

This project covers only using the production React.
