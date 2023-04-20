"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTSConfig = loadTSConfig;

var _ParseConfigHost = require("./ParseConfigHost");

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _typescript() {
  const data = _interopRequireDefault(require("typescript"));

  _typescript = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loadTSConfig(config, options) {
  let configResult = await config.getConfig(['tsconfig.json']);

  if (!configResult) {
    return;
  }

  let host = new _ParseConfigHost.ParseConfigHost(options.inputFS, _typescript().default);

  let parsedConfig = _typescript().default.parseJsonConfigFileContent(configResult.contents, host, _path().default.dirname((0, _nullthrows().default)(configResult.filePath))); // Add all of the extended config files to be watched


  for (let file of host.filesRead) {
    config.invalidateOnFileChange(_path().default.resolve(file));
  }

  return parsedConfig.options;
}