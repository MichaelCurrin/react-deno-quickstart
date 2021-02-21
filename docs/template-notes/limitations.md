# Limitations


## Tasks

This project does not use `react-scripts` to start the React application and rather uses Deno packages to handle the serving.

Perhaps `react-scripts` is worth integrating still and will give a better developer experience. Like performing linting and recommendations as part of `react-scripts start` when running `npm/yarn start`.


## Optimizing production builds

For production app, you'll probably want extend this project.

Use a unique name and minify your bundle.

Example:

- `bundle-abcdefgh.min.js`.
- `bundle-v1.2.3.min.js`.

You might use your app's name in place of the generic "bundle".


## Styling

This project takes the simple approach of having one CSS file and adding it to the start of the React app.

### Structure

It might be better to include CSS in the `head` tag of the `index.html` page, rather than in `App`. For optimizing page loads on production.

However, this project's dev server doesn't use the `index.html` file at all, so extra logic would be needed to serve the `index.html` page and the `App` object inside that. Or find a way to serve `head` as an element within the `app` - but that would be weird as normally the app gets loaded _within_ `head` as JS.

### Importing CSS

In a React Node project, you are able to do this:

```javascript
import "./App.css"
```

And that imports CSS styles which get added as styling which **scoped** to the component.

Deno doesn't seem to have support for this. Perhaps a package to import CSS as JS modules would work.

I tried adding a shim so that TypeScript accepts importing a CSS file, but I didn't get far with that.s


## Tests

There are no tests in this project.

The usual Node pattern is to have `App.test.js` and some testing libraries like `@testing-library/react`.


## React versions

Normally you'd switch between using production and development versions of React. Where the former is optimized while the latter gives a better developer experience.

This project covers only using the production React.


## TypeScript support

Deno supports `.ts` for TS and `.jsx` for your React files with JSX syntax.

It also supports, `.tsx`, which means TS checks get applied. But, Deno will complain.

```
TS7026 [ERROR]: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.
      <p>You clicked {count} times</p>
      ~~~
```

This is discussed in [issue #3679](https://github.com/Microsoft/TypeScript/issues/3679) of the TS repo.

Another issue is that there are several errors that appear if `server.js` is converted to `server.ts` - around lack of explicit types set on variables and also `React` and `ReactDOMServer` are only known to TS as `{}` so errors appear as functions missing.

### Namespace to support JSX syntax

You can setup `declare namespace JSX` to avoid this error.

You do have to be **explicit** with the HTML tags you are using. Plus you'll have to add a Deno ignore line for the `any` parts.

This approach is applied in this project - see [shim-jsx.ts](/src/shim-jsx.ts). This is imported in [App.tsx](/src/App.tsx).

#### Alternate naming

I used the name `shim-jsx.ts` to match what is recommended for adding TS support to a Vue project.

I tried setting this up before as `types.d.ts` and used as:

```typescript
import "./types.d.ts";
```

But then got this compiler warning:

```
    If the source module contains only types, use `import type` and `export type` to import it instead.
```

It seems that only happens if using `.d` in the name.

### Import React types

Or you could import types for `React` and `ReactDOOM` from a library. The linked issue above recommends a few options. Sources are like `@types/react` or DefinitelyTyped.

This would solve the issue of JSX syntax and also functions on `React` and `ReactDOM` to be known to TS>

Normally this is added as NPM package for Node project. I don't know if there is an equivalent way that will work with Deno.
