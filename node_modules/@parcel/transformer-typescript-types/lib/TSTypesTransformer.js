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

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
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

function _tsUtils() {
  const data = require("@parcel/ts-utils");

  _tsUtils = function () {
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

function _diagnostic() {
  const data = require("@parcel/diagnostic");

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _TSModuleGraph = require("./TSModuleGraph");

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _collect = require("./collect");

var _shake = require("./shake");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new (_plugin().Transformer)({
  loadConfig({
    config,
    options
  }) {
    return (0, _tsUtils().loadTSConfig)(config, options);
  },

  transform({
    asset,
    config,
    options,
    logger
  }) {
    let opts = {
      // React is the default. Users can override this by supplying their own tsconfig,
      // which many TypeScript users will already have for typechecking, etc.
      jsx: _typescript().default.JsxEmit.React,
      moduleResolution: _typescript().default.ModuleResolutionKind.NodeJs,
      ...config,
      // Always emit output
      noEmit: false,
      noEmitOnError: false,
      declaration: true,
      declarationMap: true,
      isolatedModules: false,
      emitDeclarationOnly: true,
      outFile: 'index.d.ts',
      // createProgram doesn't support incremental mode
      composite: false,
      incremental: false
    };
    let host = new (_tsUtils().CompilerHost)(options.inputFS, _typescript().default, logger); // $FlowFixMe

    let program = _typescript().default.createProgram([asset.filePath], opts, host);

    for (let file of program.getSourceFiles()) {
      if (_path().default.normalize(file.fileName) !== asset.filePath) {
        var _host$redirectTypes$g;

        asset.invalidateOnFileChange((_host$redirectTypes$g = host.redirectTypes.get(file.fileName)) !== null && _host$redirectTypes$g !== void 0 ? _host$redirectTypes$g : file.fileName);
      }
    }

    let mainModuleName = (0, _utils().normalizeSeparators)(_path().default.relative(program.getCommonSourceDirectory(), asset.filePath).slice(0, -_path().default.extname(asset.filePath).length));
    let moduleGraph = new _TSModuleGraph.TSModuleGraph(mainModuleName);
    let emitResult = program.emit(undefined, undefined, undefined, true, {
      afterDeclarations: [// 1. Build module graph
      context => sourceFile => {
        return (0, _collect.collect)(moduleGraph, context, sourceFile);
      }, // 2. Tree shake and rename types
      context => sourceFile => {
        return (0, _shake.shake)(moduleGraph, context, sourceFile);
      }]
    });

    let diagnostics = _typescript().default.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    if (diagnostics.length > 0) {
      for (let diagnostic of diagnostics) {
        let filename = asset.filePath;
        let {
          file
        } = diagnostic;
        let diagnosticMessage = typeof diagnostic.messageText === 'string' ? diagnostic.messageText : diagnostic.messageText.messageText;
        let codeframe;

        if (file != null && diagnostic.start != null) {
          let source = file.text || diagnostic.source;

          if (file.fileName) {
            filename = file.fileName;
          } // $FlowFixMe


          if (source) {
            let lineChar = file.getLineAndCharacterOfPosition(diagnostic.start);
            let start = {
              line: lineChar.line + 1,
              column: lineChar.character + 1
            };
            let end = {
              line: start.line,
              column: start.column + 1
            };

            if (typeof diagnostic.start === 'number' && typeof diagnostic.length === 'number') {
              let endCharPosition = file.getLineAndCharacterOfPosition(diagnostic.start + diagnostic.length);
              end = {
                line: endCharPosition.line + 1,
                column: endCharPosition.character + 1
              };
            }

            codeframe = {
              filePath: filename,
              code: source,
              codeHighlights: [{
                start,
                end,
                message: (0, _diagnostic().escapeMarkdown)(diagnosticMessage)
              }]
            };
          }
        }

        logger.warn({
          message: (0, _diagnostic().escapeMarkdown)(diagnosticMessage),
          codeFrames: codeframe ? [codeframe] : undefined
        });
      }
    }

    let code = (0, _nullthrows().default)(host.outputCode);
    code = code.substring(0, code.lastIndexOf('//# sourceMappingURL'));
    let map = JSON.parse((0, _nullthrows().default)(host.outputMap));
    map.sources = map.sources.map(source => _path().default.join(_path().default.dirname(asset.filePath), source));
    let sourceMap = null;

    if (map.mappings) {
      sourceMap = new (_sourceMap().default)(options.projectRoot);
      sourceMap.addVLQMap(map);
    }

    asset.type = 'ts';
    asset.setCode(code);
    asset.setMap(sourceMap);
    return [asset];
  }

});

exports.default = _default;