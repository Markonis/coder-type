"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FSHost = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-extraneous-dependencies
class FSHost {
  constructor(fs, ts) {
    this.fs = fs;
    this.ts = ts;
  }

  getCurrentDirectory = () => {
    return this.fs.cwd();
  };

  fileExists(filePath) {
    try {
      return this.fs.statSync(filePath).isFile();
    } catch (err) {
      return false;
    }
  }

  readFile(filePath) {
    try {
      return this.fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      if (err.code === 'ENOENT') {
        return undefined;
      }

      throw err;
    }
  }

  directoryExists(filePath) {
    try {
      return this.fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }

  realpath(filePath) {
    try {
      return this.fs.realpathSync(filePath);
    } catch (err) {
      return filePath;
    }
  }

  getAccessibleFileSystemEntries(dirPath) {
    try {
      let entries = this.fs.readdirSync(dirPath || '.').sort();
      let files = [];
      let directories = [];

      for (let entry of entries) {
        let filePath = _path().default.join(dirPath, entry);

        let stat;

        try {
          stat = this.fs.statSync(filePath);
        } catch (e) {
          continue;
        }

        if (stat.isFile()) {
          files.push(entry);
        } else if (stat.isDirectory()) {
          directories.push(entry);
        }
      }

      return {
        files,
        directories
      };
    } catch (err) {
      return {
        files: [],
        directories: []
      };
    }
  }

  readDirectory(root, extensions, excludes, includes, depth) {
    // $FlowFixMe[prop-missing]
    return this.ts.matchFiles(root, extensions, excludes, includes, this.ts.sys.useCaseSensitiveFileNames, this.getCurrentDirectory(), depth, dirPath => this.getAccessibleFileSystemEntries(dirPath), filePath => this.realpath(filePath), dirPath => this.directoryExists(dirPath));
  }

}

exports.FSHost = FSHost;