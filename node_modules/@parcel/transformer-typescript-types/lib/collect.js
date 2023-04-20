"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collect = collect;

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

var _TSModule = require("./TSModule");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function collect(moduleGraph, context, sourceFile) {
  // Factory only exists on TS >= 4.0
  const {
    factory = _typescript().default
  } = context; // When module definitions are nested inside each other (e.g with module augmentation),
  // we want to keep track of the hierarchy so we can associated nodes with the right module.

  const moduleStack = [];

  let _currentModule;

  let visit = node => {
    if (_typescript().default.isBundle(node)) {
      return factory.updateBundle(node, _typescript().default.visitNodes(node.sourceFiles, visit));
    }

    if (_typescript().default.isModuleDeclaration(node)) {
      moduleStack.push(_currentModule);
      _currentModule = new _TSModule.TSModule();
      moduleGraph.addModule(node.name.text, _currentModule);
    }

    if (!_currentModule) {
      return _typescript().default.visitEachChild(node, visit, context);
    }

    let currentModule = (0, _nullthrows().default)(_currentModule);

    if (_typescript().default.isImportDeclaration(node) && node.importClause) {
      if (node.importClause.namedBindings) {
        if (node.importClause.namedBindings.elements) {
          for (let element of node.importClause.namedBindings.elements) {
            var _element$propertyName;

            currentModule.addImport(element.name.text, node.moduleSpecifier.text, ((_element$propertyName = element.propertyName) !== null && _element$propertyName !== void 0 ? _element$propertyName : element.name).text);
          }
        } else if (node.importClause.namedBindings.name) {
          currentModule.addImport(node.importClause.namedBindings.name.text, node.moduleSpecifier.text, '*');
        }
      }

      if (node.importClause.name) {
        currentModule.addImport(node.importClause.name.text, node.moduleSpecifier.text, 'default');
      }
    }

    if (_typescript().default.isExportDeclaration(node)) {
      if (node.exportClause) {
        for (let element of node.exportClause.elements) {
          if (node.moduleSpecifier) {
            var _element$propertyName2;

            currentModule.addExport(element.name.text, ((_element$propertyName2 = element.propertyName) !== null && _element$propertyName2 !== void 0 ? _element$propertyName2 : element.name).text, node.moduleSpecifier.text);
          } else {
            var _element$propertyName3;

            currentModule.addExport(element.name.text, ((_element$propertyName3 = element.propertyName) !== null && _element$propertyName3 !== void 0 ? _element$propertyName3 : element.name).text);
          }
        }
      } else {
        currentModule.addWildcardExport(node.moduleSpecifier.text);
      }
    } // Handle `export default name;`


    if (_typescript().default.isExportAssignment(node) && _typescript().default.isIdentifier(node.expression)) {
      currentModule.addExport('default', node.expression.text);
    }

    if ((0, _utils.isDeclaration)(node)) {
      if (node.name) {
        currentModule.addLocal(node.name.text, node);
      }

      let name = (0, _utils.getExportedName)(node);

      if (name) {
        currentModule.addLocal(name, node);
        currentModule.addExport(name, name);
      }
    }

    if (_typescript().default.isVariableStatement(node) && node.modifiers) {
      let isExported = node.modifiers.some(m => m.kind === _typescript().default.SyntaxKind.ExportKeyword);

      for (let v of node.declarationList.declarations) {
        currentModule.addLocal(v.name.text, v);

        if (isExported) {
          currentModule.addExport(v.name.text, v.name.text);
        }
      }
    }

    const results = _typescript().default.visitEachChild(node, visit, context); // After we finish traversing the children of a module definition,
    // we need to make sure that subsequent nodes get associated with the next-highest level module.


    if (_typescript().default.isModuleDeclaration(node)) {
      _currentModule = moduleStack.pop();
    }

    return results;
  };

  return _typescript().default.visitNode(sourceFile, visit);
}