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
