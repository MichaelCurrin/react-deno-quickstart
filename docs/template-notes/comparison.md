# Comparison with other projects

My aim before making this project was to replicate what I do in a React Node project, covering both bullet points above. I looked at tutorials and repos, but none covered this flow. So I made this project.

For interest, here are resources I found.


## Backend

Here is what I found searching for "React Deno". They all use Deno on the server side (the backend).

- [React Deno - Server Side Rendering with Deno (SSR)](https://dev.to/adriantwarog/react-deno-server-side-rendering-with-deno-ssr-4438) post.
- [Writing a React SSR app in Deno](https://dev.to/craigmorten/writing-a-react-ssr-app-in-deno-2m7) post.
- [React Server-Side Rendering with Deno](https://www.telerik.com/blogs/react-server-side-rendering-deno) post.
- [deno-node-react-app](https://github.com/yashgkar/deno-node-react-app) post
    - two directories for backend in Node or React and `react` directory for frontend (note `package.json`).
- [Build an Isomorphic Application using Deno and React without WebPack](https://decipher.dev/deno-by-example/advanced-react-ssr/) guide.

Server-side rendering means running a Deno server in production and structuring as an API or an MVC. Maybe with a database.

This is not relevant for me, looking for make a Single-Page Application that can be served as static files with Nginx or GH Pages.

Some of these handle Node and NPM to build the React frontend. Which I think misses the point of Deno as a Node replacement.


## Frontend

Some others use Deno to handle a React dev server like I want. But they don't support a step to build a static app. I can't recall one of those.

I did also find this which bundles a client-side React app. But, it is designed to be used with the SSR Deno, which I don't want. Also there is code there I don't need. I want to stick to the basics. Also that uses `Deno.bundle` in TS code instead of in the terminal which seems weird.

- [How To Bundle Code For Deno Web Applications](https://dev.to/craigmorten/deno-bundle-for-server-side-rendered-react-11c2) post
