IGNORE = --ignore=build,public,docs,README.md
CONFIG = --config tsconfig.json

OUT_DIR = build
BUNDLED := $(OUT_DIR)/bundle.js

.PHONY: hooks $(OUT_DIR)


default: install

all: hooks install fmt-check lint build


h help:
	@grep '^[a-z]' Makefile


hooks:
	cd .git/hooks && ln -s -f ../../hooks/pre-push pre-push

install:
	deno cache deps.ts
	deno cache dev_deps.ts

upgrade:
	deno cache --reload deps.ts
	deno cache --reload dev_deps.ts


fmt:
	deno fmt $(IGNORE) --unstable

fmt-check:
	deno fmt --check $(IGNORE) --unstable

l lint:
	deno lint --unstable $(IGNORE)


s serve:
	deno run $(CONFIG) --allow-net --allow-read --unstable --watch server.jsx


clean:
	rm -rf $(OUT_DIR)

build:
	mkdir -p $(OUT_DIR)
	cp public/* $(OUT_DIR)
	deno bundle $(CONFIG) src/index.jsx $(BUNDLED)

static: clean build
	deno run $(CONFIG) --allow-net --allow-read static.ts
