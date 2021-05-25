# Usage

This project uses `make` - a task runner available on Linux and macOS. If you are on Windows, you need to install `make`.


## Run checks

Apply formatting changes.

```sh
$ make fmt
```

Check for lint errors and warnings.

```sh
$ make lint
```


## Run dev server

Run this task:

```sh
$ make serve
```

Open the browser at:

- http://localhost:8080

That task will prepare assets in the `build` directory, build the JS bundle file continuously and also start a static dev server in the `build` directory in parallel.

The `--watch` flag is used, so if you save any file changes the Deno will rebuild the JS file for you without having to restart the task. Keep your eyes on the CLI console - after a few seconds it will say it is done and then you can refresh the browser.
