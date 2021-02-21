# TypeScript and JSX

## Issues

### No types in server

There are several errors that appear if `server.js` is converted to `server.ts` - around lack of explicit types set on variables and also `React` and `ReactDOMServer` are only known to TS as `{}` so errors appear as functions missing.

The script is boilerplate I copied and won't change, so I am not worried about types there.

### JSX elements error

Deno supports `.ts` for TS and `.jsx` for your React files with JSX syntax.

It also supports, `.tsx`, which means TS checks get applied. But, Deno will complain.

```
TS7026 [ERROR]: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.
      <p>You clicked {count} times</p>
      ~~~
```

This is discussed in [issue #3679](https://github.com/Microsoft/TypeScript/issues/3679) of the TS repo.


## Solutions

### Namespace to support JSX syntax

You can setup `InstrinsicElements` and `declare namespace JSX` to avoid this error. See [InstrinsicElements](https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements) in the TS docs around JSX.

This approach is applied in this project - see [shims-react.ts](/src/shims-react.ts). This is imported in [App.tsx](/src/App.tsx).

#### Alternate naming

I used the name `shims-react.ts` - this is match the recommended flow for Vue apps when add TS support. See [shims-vue.d.ts](https://github.com/MichaelCurrin/vue-typescript-quickstart/blob/master/src/shims-vue.d.ts) in Vue app.

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

Or, you could import types for `React` and `ReactDOOM` from a library. The linked issue above recommends a few options. Sources are like `@types/react` or DefinitelyTyped.

This would solve the issue of JSX syntax and also functions on `React` and `ReactDOM` to be known to TS>

Normally this is added as NPM package for Node project. I don't know if there is an equivalent way that will work with Deno.
