"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSModuleGraph = void 0;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

class TSModuleGraph {
  constructor(mainModuleName) {
    this.modules = new Map();
    this.mainModuleName = mainModuleName;
    this.mainModule = null;
  }

  addModule(name, module) {
    this.modules.set(name, module);

    if (name === this.mainModuleName) {
      this.mainModule = module;
    }
  }

  getModule(name) {
    return this.modules.get(name);
  }

  markUsed(module, name, context) {
    // If name is imported, mark used in the original module
    if (module.imports.has(name)) {
      module.used.add(name);
      let resolved = this.resolveImport(module, name); // Missing or external

      if (!resolved || resolved.module === module) {
        return;
      }

      return this.markUsed(resolved.module, resolved.imported, context);
    }

    if (module.used.has(name)) {
      return;
    }

    module.used.add(name); // Visit all child nodes of the original binding and mark any referenced types as used.

    let visit = node => {
      if (_typescript().default.isQualifiedName(node) && _typescript().default.isIdentifier(node.left)) {
        let resolved = this.resolveImport(module, node.left.text, node.right.text);

        if (resolved) {
          this.markUsed(resolved.module, resolved.imported, context);
        }
      } else if (_typescript().default.isIdentifier(node)) {
        this.markUsed(module, node.text, context);
      }

      return _typescript().default.visitEachChild(node, visit, context);
    };

    let bindings = module.bindings.get(name);

    if (bindings) {
      for (let node of bindings) {
        _typescript().default.visitEachChild(node, visit, context);
      }
    }
  }

  getExport(m, e) {
    (0, _assert().default)(e.name != null);
    let exportName = e.name; // Re-export

    if (e.specifier && e.imported) {
      let m = this.getModule(e.specifier);

      if (!m) {
        return null;
      }

      let exp = this.resolveExport(m, e.imported);

      if (!exp) {
        return null;
      }

      return {
        module: exp.module,
        imported: exp.imported || exp.name,
        name: exportName
      };
    } // Import and then export


    if (m.imports.has(exportName)) {
      let imp = this.resolveImport(m, exportName);

      if (!imp) {
        return null;
      }

      return {
        module: imp.module,
        imported: imp.name,
        name: exportName
      };
    } // Named export


    return {
      module: m,
      name: exportName,
      imported: e.imported != null ? m.getName(e.imported) : exportName
    };
  }

  resolveImport(module, local, imported) {
    let i = module.imports.get(local);

    if (!i) {
      return null;
    }

    let m = this.getModule(i.specifier);

    if (!m) {
      // External module. pass through the import.
      return {
        module,
        name: local,
        imported: imported || i.imported
      };
    }

    return this.resolveExport(m, imported || i.imported);
  }

  resolveExport(module, name) {
    for (let e of module.exports) {
      if (e.name === name) {
        return this.getExport(module, e);
      } else if (e.specifier) {
        const m = this.resolveExport((0, _nullthrows().default)(this.getModule(e.specifier)), name);

        if (m) {
          return m;
        }
      }
    }
  }

  getAllExports(module = (0, _nullthrows().default)(this.mainModule), excludeDefault = false) {
    let res = [];

    for (let e of module.exports) {
      if (e.name && (!excludeDefault || e.name !== 'default')) {
        let exp = this.getExport(module, e);

        if (exp) {
          res.push(exp);
        }
      } else if (e.specifier) {
        let m = this.getModule(e.specifier);

        if (m) {
          res.push(...this.getAllExports(m, true));
        }
      }
    }

    return res;
  }

  getAllImports() {
    // Build a map of all imports for external modules
    let importsBySpecifier = new Map();

    for (let module of this.modules.values()) {
      for (let [name, imp] of module.imports) {
        if (module.used.has(name) && !this.modules.has(imp.specifier)) {
          let importMap = importsBySpecifier.get(imp.specifier);

          if (!importMap) {
            importMap = new Map();
            importsBySpecifier.set(imp.specifier, importMap);
          }

          name = module.getName(name);
          importMap.set(name, imp.imported);
        }
      }
    }

    return importsBySpecifier;
  }

  propagate(context) {
    // Resolve all exported values, and mark them as used.
    let names = Object.create(null);
    let exportedNames = new Map();

    for (let e of this.getAllExports()) {
      this.markUsed(e.module, e.imported, context);
      e.module.names.set(e.imported, e.name);
      names[e.name] = 1;
      exportedNames.set(e.name, e.module);
    }

    let importedSymbolsToUpdate = []; // Assign unique names across all modules

    for (let m of this.modules.values()) {
      for (let [orig, name] of m.names) {
        if (exportedNames.has(name) && exportedNames.get(name) === m) {
          continue;
        }

        if (!m.used.has(orig)) {
          continue;
        }

        if (m.imports.has(orig)) {
          // Update imports after all modules's local variables have been renamed
          importedSymbolsToUpdate.push([m, orig]);
          continue;
        }

        if (names[name]) {
          m.names.set(name, `_${name}${names[name]++}`);
        } else {
          names[name] = 1;
        }
      }
    } // Map of imported specifiers -> map of imported names to local names


    let imports = new Map();

    for (let [m, orig] of importedSymbolsToUpdate) {
      let imp = (0, _nullthrows().default)(m.imports.get(orig));
      let imported = (0, _nullthrows().default)(this.resolveImport(m, orig)); // If the module is bundled, map the local name to the original exported name.

      if (this.modules.has(imp.specifier)) {
        m.names.set(orig, imported.imported);
        continue;
      } // If it's external, then we need to dedup duplicate imported names, and ensure
      // that they do not conflict with any exported or local names.


      let importedNames = imports.get(imp.specifier);

      if (!importedNames) {
        importedNames = new Map();
        imports.set(imp.specifier, importedNames);
      }

      let name = importedNames.get(imported.imported);

      if (!name) {
        if (names[imported.imported]) {
          name = `_${imported.imported}${names[imported.imported]++}`;
        } else {
          name = imported.imported;
          names[imported.imported] = 1;
        }

        importedNames.set(imported.imported, name);
      }

      m.names.set(orig, name);
    }

    return exportedNames;
  }

}

exports.TSModuleGraph = TSModuleGraph;