"use strict";

var url = require('url');
var _require = require('module'),
  createRequire = _require.createRequire;
module.exports = function (bundle) {
  var path = url.fileURLToPath(bundle);
  var require = createRequire(path);
  return require(path);
};