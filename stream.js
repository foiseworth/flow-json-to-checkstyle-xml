#!/usr/bin/env node
var flowToCheckStyle = require('./index');

var stdin = process.openStdin();
var streamedData = "";
stdin.on('data', function(chunk) {
  streamedData += chunk;
});
stdin.on('end', function() {
  console.log(flowToCheckStyle(streamedData));
});
