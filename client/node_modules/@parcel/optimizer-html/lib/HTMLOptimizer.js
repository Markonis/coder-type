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
function _path() {
  const data = _interopRequireDefault(require("path"));
  _path = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = new (_plugin().Optimizer)({
  async loadConfig({
    config,
    options
  }) {
    let userConfig = await config.getConfigFrom(_path().default.join(options.projectRoot, 'index.html'), ['.htmlnanorc', '.htmlnanorc.json', '.htmlnanorc.js', '.htmlnanorc.cjs', '.htmlnanorc.mjs', 'htmlnano.config.js', 'htmlnano.config.cjs', 'htmlnano.config.mjs'], {
      packageKey: 'htmlnano'
    });
    let contents = userConfig === null || userConfig === void 0 ? void 0 : userConfig.contents;
    if (userConfig && contents && typeof contents === 'object') {
      contents.minifySvg = await (0, _utils().convertSVGOConfig)(contents.minifySvg, userConfig.filePath, _path().default.extname(userConfig.filePath) === 'package.json' ? '/htmlnano/minifySvg' : '/minifySvg', options.inputFS, 'Use the legacy @parcel/optimizer-htmlnano instead of @parcel/optimizer-html if needed.');
    }
    return contents;
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
    let res = (0, _rust().optimizeHtml)({
      code,
      xml: bundle.type === 'xhtml',
      config
    });
    return {
      contents: res.code
    };
  }
});