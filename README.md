# Acquire anchor
[![npm version](https://badge.fury.io/js/aflow-json-to-checkstyle-xml.svg)](http://badge.fury.io/js/aflow-json-to-checkstyle-xml)
[![Build Status](https://travis-ci.org/foiseworth/aflow-json-to-checkstyle-xml.svg?branch=master)](https://travis-ci.org/foiseworth/aflow-json-to-checkstyle-xml)
![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)

A utility to transform flow's output to checkstyle xml for use with, for example, jenkins.

## To use
Can be installed locally or globally. Available as a bin command via:
```
flow-type-check-json-to-xml
```

In order to use, pipe the output of flow (with the `--json` and `--show-all-errors` flags) to it:

```
flow check --json --show-all-errors | flow-type-check-json-to-xml
```

The output will be piped to standard out where you can redirect it to a file.
