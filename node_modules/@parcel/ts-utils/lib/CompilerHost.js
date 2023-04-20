"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompilerHost = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

var _FSHost = require("./FSHost");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
class CompilerHost extends _FSHost.FSHost {
  // workaround for https://github.com/microsoft/TypeScript/issues/39547
  redirectTypes = new Map();

  constructor(fs, ts, logger) {
    super(fs, ts);
    this.logger = logger;
  }

  readFile(filePath) {
    let contents = super.readFile(filePath);

    if (contents && _path().default.basename(filePath) === 'package.json') {
      let json = JSON.parse(contents);

      if (json.types != null && json.source != null && !super.fileExists(_path().default.posix.join(_path().default.posix.dirname(filePath), json.types))) {
        let source = _path().default.posix.join(_path().default.posix.dirname(filePath), json.source);

        let fakeTypes = source.slice(0, -_path().default.posix.extname(source).length) + '.d.ts';
        this.redirectTypes.set(fakeTypes, source);
        json.types = fakeTypes;
        this.logger.verbose({
          message: `Faking missing \`types\` field in ${filePath} to be ${source}`
        });
        return JSON.stringify(json);
      }
    }

    return contents;
  }

  fileExists(filePath) {
    if (this.redirectTypes.has(filePath)) {
      return true;
    } else {
      return super.fileExists(filePath);
    }
  }

  getSourceFile(filePath, languageVersion) {
    let redirect = this.redirectTypes.get(filePath);

    if (redirect != null) {
      const sourceText = this.readFile(redirect);
      return sourceText !== undefined ? this.ts.createSourceFile(filePath, sourceText, languageVersion) : undefined;
    } else {
      const sourceText = this.readFile(filePath);
      return sourceText !== undefined ? this.ts.createSourceFile(filePath, sourceText, languageVersion) : undefined;
    }
  }

  getDefaultLibFileName(options) {
    return this.ts.getDefaultLibFilePath(options);
  }

  writeFile(filePath, content) {
    if (_path().default.extname(filePath) === '.map') {
      this.outputMap = content;
    } else {
      this.outputCode = content;
    }
  }

  getCanonicalFileName(fileName) {
    return this.ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase();
  }

  useCaseSensitiveFileNames() {
    return this.ts.sys.useCaseSensitiveFileNames;
  }

  getNewLine() {
    return this.ts.sys.newLine;
  }

}

exports.CompilerHost = CompilerHost;