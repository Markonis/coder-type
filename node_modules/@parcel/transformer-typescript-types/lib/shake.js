"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shake = shake;

var _TSModule = require("./TSModule");

function _typescript() {
  const data = _interopRequireDefault(require("typescript"));

  _typescript = function () {
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

var _utils = require("./utils");

var _wrappers = require("./wrappers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shake(moduleGraph, context, sourceFile) {
  // Factory only exists on TS >= 4.0
  const {
    factory = _typescript().default
  } = context; // We traverse things out of order which messes with typescript's internal state.
  // We don't rely on the lexical environment, so just overwrite with noops to avoid errors.

  context.suspendLexicalEnvironment = () => {};

  context.resumeLexicalEnvironment = () => {}; // Propagate exports from the main module to determine what types should be included


  let exportedNames = moduleGraph.propagate(context); // When module definitions are nested inside each other (e.g with module augmentation),
  // we want to keep track of the hierarchy so we can associated nodes with the right module.

  const moduleStack = [];
  let addedGeneratedImports = false;

  let _currentModule;

  let visit = node => {
    if (_typescript().default.isBundle(node)) {
      return factory.updateBundle(node, _typescript().default.visitNodes(node.sourceFiles, visit));
    } // Flatten all module declarations into the top-level scope


    if (_typescript().default.isModuleDeclaration(node)) {
      // Deeply nested module declarations are assumed to be module augmentations and left alone.
      if (moduleStack.length >= 1) {
        var _node, _node$modifiers, _node$modifiers$;

        // Since we are hoisting them to the top-level scope, we need to add a "declare" keyword to make them ambient.
        // we also want the declare keyword to come after the export keyword to guarantee a valid typings file.
        (_node$modifiers = (_node = node).modifiers) !== null && _node$modifiers !== void 0 ? _node$modifiers : _node.modifiers = [];
        const index = ((_node$modifiers$ = node.modifiers[0]) === null || _node$modifiers$ === void 0 ? void 0 : _node$modifiers$.kind) === _typescript().default.SyntaxKind.ExportKeyword ? 1 : 0;
        node.modifiers.splice(index, 0, factory.createModifier(_typescript().default.SyntaxKind.DeclareKeyword));
        return node;
      }

      moduleStack.push(_currentModule);
      let isFirstModule = !_currentModule;
      _currentModule = moduleGraph.getModule(node.name.text);

      let statements = _typescript().default.visitEachChild(node, visit, context).body.statements;

      _currentModule = moduleStack.pop();

      if (isFirstModule && !addedGeneratedImports) {
        statements.unshift(...generateImports(factory, moduleGraph));
        addedGeneratedImports = true;
      }

      return statements;
    }

    if (!_currentModule) {
      return _typescript().default.visitEachChild(node, visit, context);
    } // Remove inline imports. They are hoisted to the top of the output.


    if (_typescript().default.isImportDeclaration(node)) {
      return null;
    }

    let currentModule = (0, _nullthrows().default)(_currentModule); // Remove exports from flattened modules

    if (_typescript().default.isExportDeclaration(node)) {
      if (!node.moduleSpecifier || moduleGraph.getModule(node.moduleSpecifier.text)) {
        if (!node.moduleSpecifier && node.exportClause) {
          // Filter exported elements to only external re-exports
          let exported = [];

          for (let element of node.exportClause.elements) {
            var _element$propertyName;

            let name = ((_element$propertyName = element.propertyName) !== null && _element$propertyName !== void 0 ? _element$propertyName : element.name).text;

            if (exportedNames.get(name) === currentModule && !currentModule.hasBinding(name)) {
              exported.push(element);
            }
          }

          if (exported.length > 0) {
            return (0, _wrappers.updateExportDeclaration)(factory, node, undefined, // modifiers
            false, // isTypeOnly
            factory.updateNamedExports(node.exportClause, exported), undefined, // moduleSpecifier
            undefined // assertClause
            );
          }
        }

        return null;
      }
    } // Remove export assignment if unused.


    if (_typescript().default.isExportAssignment(node)) {
      let name = currentModule.getName('default');

      if (exportedNames.get(name) !== currentModule) {
        return null;
      }
    }

    if ((0, _utils.isDeclaration)(node)) {
      let name = (0, _utils.getExportedName)(node) || node.name.text; // Remove unused declarations

      if (!currentModule.used.has(name)) {
        return null;
      } // Remove original export modifiers


      node.modifiers = (node.modifiers || []).filter(m => m.kind !== _typescript().default.SyntaxKind.ExportKeyword && m.kind !== _typescript().default.SyntaxKind.DefaultKeyword); // Rename declarations

      let newName = currentModule.getName(name);

      if (newName !== name && newName !== 'default') {
        node.name = factory.createIdentifier(newName);
      } // Export declarations that should be exported


      if (exportedNames.get(newName) === currentModule) {
        if (newName === 'default') {
          node.modifiers.unshift(factory.createModifier(_typescript().default.SyntaxKind.DefaultKeyword));
        }

        node.modifiers.unshift(factory.createModifier(_typescript().default.SyntaxKind.ExportKeyword));
      } else if (_typescript().default.isFunctionDeclaration(node) || _typescript().default.isClassDeclaration(node)) {
        node.modifiers.unshift(factory.createModifier(_typescript().default.SyntaxKind.DeclareKeyword));
      }
    }

    if (_typescript().default.isVariableStatement(node)) {
      node = _typescript().default.visitEachChild(node, visit, context); // Remove empty variable statements

      if (node.declarationList.declarations.length === 0) {
        return null;
      } // Remove original export modifiers


      node.modifiers = (node.modifiers || []).filter(m => m.kind !== _typescript().default.SyntaxKind.ExportKeyword && m.kind !== _typescript().default.SyntaxKind.DeclareKeyword); // Add export modifier if all declarations are exported.

      let isExported = node.declarationList.declarations.every(d => exportedNames.get(d.name.text) === currentModule);

      if (isExported) {
        node.modifiers.unshift(factory.createModifier(_typescript().default.SyntaxKind.ExportKeyword));
      } else {
        // Otherwise, add `declare` modifier (required for top-level declarations in d.ts files).
        node.modifiers.unshift(factory.createModifier(_typescript().default.SyntaxKind.DeclareKeyword));
      }

      return node;
    }

    if (_typescript().default.isVariableDeclaration(node)) {
      // Remove unused variables
      if (!currentModule.used.has(node.name.text)) {
        return null;
      }
    } // Rename references


    if (_typescript().default.isIdentifier(node) && currentModule.names.has(node.text)) {
      let newName = (0, _nullthrows().default)(currentModule.getName(node.text));

      if (newName !== 'default') {
        return factory.createIdentifier(newName);
      }
    } // Replace namespace references with final names


    if (_typescript().default.isQualifiedName(node) && _typescript().default.isIdentifier(node.left)) {
      let resolved = moduleGraph.resolveImport(currentModule, node.left.text, node.right.text);

      if (resolved && resolved.module.hasBinding(resolved.name)) {
        return factory.createIdentifier(resolved.name);
      } else {
        return factory.updateQualifiedName(node, factory.createIdentifier(currentModule.getName(node.left.text)), node.right);
      }
    } // Remove private properties


    if (_typescript().default.isPropertyDeclaration(node)) {
      let isPrivate = node.modifiers && node.modifiers.some(m => m.kind === _typescript().default.SyntaxKind.PrivateKeyword);

      if (isPrivate) {
        return null;
      }
    }

    return _typescript().default.visitEachChild(node, visit, context);
  };

  return _typescript().default.visitNode(sourceFile, visit);
}

function generateImports(factory, moduleGraph) {
  let importStatements = [];

  for (let [specifier, names] of moduleGraph.getAllImports()) {
    let defaultSpecifier;
    let namespaceSpecifier;
    let namedSpecifiers = [];

    for (let [name, imported] of names) {
      if (imported === 'default') {
        defaultSpecifier = factory.createIdentifier(name);
      } else if (imported === '*') {
        namespaceSpecifier = factory.createNamespaceImport(factory.createIdentifier(name));
      } else {
        namedSpecifiers.push((0, _wrappers.createImportSpecifier)(factory, false, name === imported ? undefined : factory.createIdentifier(imported), factory.createIdentifier(name)));
      }
    }

    if (namespaceSpecifier) {
      let importClause = (0, _wrappers.createImportClause)(factory, false, defaultSpecifier, namespaceSpecifier);
      importStatements.push((0, _wrappers.createImportDeclaration)(factory, undefined, importClause, factory.createStringLiteral(specifier), undefined));
      defaultSpecifier = undefined;
    }

    if (defaultSpecifier || namedSpecifiers.length > 0) {
      let importClause = (0, _wrappers.createImportClause)(factory, false, defaultSpecifier, namedSpecifiers.length > 0 ? factory.createNamedImports(namedSpecifiers) : undefined);
      importStatements.push((0, _wrappers.createImportDeclaration)(factory, undefined, importClause, factory.createStringLiteral(specifier), undefined));
    }
  }

  return importStatements;
}