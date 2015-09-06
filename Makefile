
BIN = ./node_modules/.bin
BROWSERIFY = $(BIN)/browserify

all: example.bundle.js

%.bundle.js: %.js
	$(BROWSERIFY) $< -t [ babelify --stage 0 ] --verbose --debug -o $@

test:
	./node_modules/karma/bin/karma start

clean:
	rm example.bundle.js

ghpages:
	git checkout gh-pages
	git checkout master ./Panel.js ./example.js
	make clean && make
	git add .
	git commit -m "update gh-pages"
	git push
	git checkout master

.PHONY: test clean ghpages
