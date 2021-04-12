# Usage

This project uses `make` - a task runner available on Linux and macOS.

If you are on Windows, you'll have to enter the `deno` commands directly in your shell, based on the contents of [Makefile](/Makefile). Some commands might need adjusting for PowerShell instead of Bash.


## Run checks

Format.

```sh
$ make fmt
```

Lint.

```sh
$ make lint
```


## Run dev server

Start the app using server-side rendering of React.

```sh
$ make serve
```

Open the browser at:

- http://localhost:8080

That uses the [server.js](/server.js) and the `abc` Deno package to serve a development form of the app.

The command uses the `--watch` flag - so if you save any file changes, Deno will rebuild the app for you without having to restart the server. Just watch the dev console and after a few seconds it will say it is done. Then you can refresh the browser.

### Note

I guess this might be faster for reloads than running a static server against `deno bundle` production build output. I don't know if that is the case or if there are good reasons for this over that static build. In React Node projects, the dev server is faster than production build.
