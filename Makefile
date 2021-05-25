
PUBLIC_DIR = public
OUT_DIR = build
BUNDLED := $(OUT_DIR)/bundle.js
MINIFIED := $(OUT_DIR)/bundle.min.js

IGNORE = --ignore=$(PUBLIC_DIR),$(OUT_DIR),docs,README.md
CONFIG = --config tsconfig.json

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
	deno run $(CONFIG) --allow-net --allow-read --unstable --watch server.js


clean:
	rm -rf $(OUT_DIR)

minify:
	npx esbuild $(BUNDLED) --outfile=$(MINIFIED) --minify --sourcemap \
		--define:'process.env.NODE_ENV="production"'
	@echo 'Size comparison:'
	@ls -l -h $(BUNDLED) $(MINIFIED)

build:
	mkdir -p $(OUT_DIR)
	cp public/* $(OUT_DIR)
	deno bundle $(CONFIG) src/index.jsx $(BUNDLED)
	$(MAKE) minify

static: clean build
	deno run $(CONFIG) --allow-net --allow-read static.ts
