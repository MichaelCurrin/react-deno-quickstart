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


## Start dev server

Using the [server.js](/server.js) and the `abc` Deno package to serve a development form of the app.

```sh
$ make serve
```

Open the browser at:

- http://localhost:8080

This uses the `--watch` flag. So if you save any file changes, Deno will rebuild the app for you without having to restart the server.

Just watch the dev console and after a few seconds it will say it is done. Then you can refresh the browser.
