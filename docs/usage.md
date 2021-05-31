# Usage

This project uses `make` - a task runner available on Linux and macOS. If you are on Windows, you need to install `make`.

Tasks are defined in [Makefile](/Makefile).


## Run checks

Apply formatting changes.

```sh
$ make fmt
```

Check for lint errors and warnings.

```sh
$ make lint
```


## Start dev server

Run this task:

```sh
$ make serve
```

Then open the browser at:

- http://localhost:8080

This task will do two things:

- Prepare the assets and create a bundled JS file with Deno, updating it continuously on any changes (thanks to the `--watch` flag).
- Start a dev server with Deno, serving the `build` output directory.

If you save any file changes, Deno will rebuild the JS file for you without having to restart the task. Keep your eyes on the CLI console - after a few seconds it will say it is done and then you can refresh the browser to see your changes.

The task is configured to internally to use the ability of `make` to run commands in _parallel_ (no additional packages needed). This specified with `-j 2` for two parallel tasks. This flow is convenient because you only need one terminal window open and one command but you get to stop and start two tasks at once.
