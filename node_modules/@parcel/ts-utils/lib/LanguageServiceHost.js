"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageServiceHost = void 0;

var _FSHost = require("./FSHost");

// eslint-disable-line import/no-extraneous-dependencies
// the typings from flow-typed define the ILanguageServiceHost interface as
// having its methods as properties with arrow functions. These should probably
// be methods instead.
// $FlowFixMe[method-unbinding]
class LanguageServiceHost extends _FSHost.FSHost {
  constructor(fs, ts, config) {
    super(fs, ts);
    this.config = config;
    this.files = {};
  }

  invalidate(fileName) {
    // When the typescript language server calls "getScriptVersion", it will normalize paths for cross-platform (e.g. C:\myFile.ts on Windows becomes C:/myFile.ts). We need to do the same thing.
    // $FlowFixMe getNormalizedAbsolutePath is missing from the flow-typed definition.
    const normalizedFileName = this.ts.getNormalizedAbsolutePath(fileName);
    const entry = this.files[normalizedFileName];

    if (entry) {
      entry.version++;
    } else {
      this.files[normalizedFileName] = {
        version: 0
      };
    }
  }

  getScriptFileNames() {
    return this.config.fileNames;
  }

  getScriptVersion(fileName) {
    return this.files[fileName] && this.files[fileName].version.toString();
  }

  getScriptSnapshot(fileName) {
    if (!this.fileExists(fileName)) {
      return;
    }

    const content = this.readFile(fileName);

    if (content) {
      // $FlowFixMe
      return this.ts.ScriptSnapshot.fromString(content);
    }
  }

  getCompilationSettings() {
    return this.config.options;
  }

  getDefaultLibFileName(projectOptions) {
    return this.ts.getDefaultLibFilePath(projectOptions);
  }

}

exports.LanguageServiceHost = LanguageServiceHost;