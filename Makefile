
browserify = ./node_modules/.bin/browserify

react:
	$(browserify) --outfile ./example.bundle.js -t [ babelify --stage 0 ] --verbose --debug ./example.js

.PHONY: react
