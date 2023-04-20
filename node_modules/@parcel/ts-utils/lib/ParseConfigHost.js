"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseConfigHost = void 0;

var _FSHost = require("./FSHost");

// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
class ParseConfigHost extends _FSHost.FSHost {
  constructor(fs, ts) {
    super(fs, ts);
    this.filesRead = new Set();
    this.useCaseSensitiveFileNames = ts.sys.useCaseSensitiveFileNames;
  }

  readFile(filePath) {
    this.filesRead.add(filePath);
    return super.readFile(filePath);
  }

}

exports.ParseConfigHost = ParseConfigHost;