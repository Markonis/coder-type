"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _plugin() {
  const data = require("@parcel/plugin");
  _plugin = function () {
    return data;
  };
  return data;
}
function _utils() {
  const data = require("@parcel/utils");
  _utils = function () {
    return data;
  };
  return data;
}
function _rust() {
  const data = require("@parcel/rust");
  _rust = function () {
    return data;
  };
  return data;
}
var _default = exports.default = new (_plugin().Optimizer)({
  async loadConfig({
    config,
    options
  }) {
    let configFile = await config.getConfig(['svgo.config.js', 'svgo.config.cjs', 'svgo.config.mjs', 'svgo.config.json']);
    if (configFile) {
      return (0, _utils().convertSVGOConfig)(configFile.contents, configFile.filePath, '', options.inputFS, 'Use the legacy @parcel/optimizer-svgo instead of @parcel/optimizer-svg if needed.');
    }
  },
  async optimize({
    bundle,
    contents,
    map,
    config
  }) {
    if (!bundle.env.shouldOptimize) {
      return {
        contents,
        map
      };
    }
    let code = await (0, _utils().blobToBuffer)(contents);
    let res = (0, _rust().optimizeSvg)({
      code,
      xml: true,
      config
    });
    return {
      contents: res.code
    };
  }
});