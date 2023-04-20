"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSModule = void 0;

class TSModule {
  constructor() {
    this.imports = new Map();
    this.exports = [];
    this.bindings = new Map();
    this.names = new Map();
    this.used = new Set();
  }

  addImport(local, specifier, imported) {
    this.imports.set(local, {
      specifier,
      imported
    });

    if (imported !== '*' && imported !== 'default') {
      this.names.set(local, local);
    }
  } // if not a reexport: imported = local, name = exported


  addExport(name, imported, specifier) {
    this.exports.push({
      name,
      specifier,
      imported
    });
  }

  addWildcardExport(specifier) {
    this.exports.push({
      specifier
    });
  }

  addLocal(name, node) {
    var _this$bindings$get;

    const bindings = (_this$bindings$get = this.bindings.get(name)) !== null && _this$bindings$get !== void 0 ? _this$bindings$get : new Set();
    bindings.add(node);
    this.bindings.set(name, bindings);

    if (name !== 'default') {
      this.names.set(name, name);
    }
  }

  getName(name) {
    return this.names.get(name) || name;
  }

  hasBinding(name) {
    return this.bindings.has(name);
  }

}

exports.TSModule = TSModule;