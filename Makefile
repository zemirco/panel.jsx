
BIN = ./node_modules/.bin
BROWSERIFY = $(BIN)/browserify

all: example.bundle.js

%.bundle.js: %.js
	$(BROWSERIFY) $< -t [ babelify --stage 0 ] --verbose --debug -o $@

test:
	./node_modules/karma/bin/karma start

clean:
	rm example.bundle.js

.PHONY: test clean
