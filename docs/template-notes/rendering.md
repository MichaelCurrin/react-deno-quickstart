# Rendering

If you want to improve your app's performance or SEO ranking:

- Use an NPM package like [presite][] to render your site as static HTML at build time. Or
- Use Netlify and the pre-rendering option.

Either of those are easy to apply. Alternatively, you can rewrite some of this app to use Deno for Server-Side Rendering and set up a Deno server in production, but that's a lot of hassle for no gain for the simple case of static content.

If you want to have _dynamic_ content, only then does SSR make sense.

[presite]: https://github.com/egoist/presite#examples
[GitHub Pages]: https://michaelcurrin.github.io/dev-resources/resources/web/github-pages.html
