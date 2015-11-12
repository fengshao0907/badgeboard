npm_bin= $$(npm bin)

all: test
install:
	@npm install
test: install
	@node ./test/badgeboard.test.js
jshint:
	@${npm_bin}/jshint .
.PHONY: test
