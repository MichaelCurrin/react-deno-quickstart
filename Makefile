
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


clean:
	rm -rf $(OUT_DIR)

assets: clean
	mkdir -p $(OUT_DIR)
	cp $(PUBLIC_DIR)/styles.css $(OUT_DIR)

bundle-dev: assets
	cp $(PUBLIC_DIR)/dev.html $(OUT_DIR)/index.html
	deno bundle --watch $(CONFIG) src/index.jsx $(BUNDLED)

bundle-prod: assets
	cp $(PUBLIC_DIR)/prod.html $(OUT_DIR)/index.html
	deno bundle $(CONFIG) src/index.jsx $(BUNDLED)


static-server:
	deno run $(CONFIG) --allow-net --allow-read static.ts

s serve:
	$(MAKE) -j 2 bundle-dev static-server


minify:
	npx esbuild $(BUNDLED) --outfile=$(MINIFIED) --minify --sourcemap \
		--define:'process.env.NODE_ENV="production"'

build: bundle-prod minify
