"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateExportDeclaration = exports.createImportSpecifier = exports.createImportDeclaration = exports.createImportClause = void 0;

function _typescript() {
  const data = _interopRequireDefault(require("typescript"));

  _typescript = function () {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
const [majorVersion, minorVersion] = _typescript().default.versionMajorMinor.split('.').map(num => parseInt(num, 10)); // Everything below was generated using https://github.com/mischnic/tsc-version-wrapper


const createImportClause = (() => {
  if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 0) {
    return (factory, isTypeOnly, name, namedBindings) => factory.createImportClause(isTypeOnly, name, namedBindings);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 8) {
    return (factory, isTypeOnly, name, namedBindings) => factory.createImportClause(name, namedBindings, isTypeOnly);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 0) {
    return (factory, isTypeOnly, name, namedBindings) => factory.createImportClause(name, namedBindings);
  } else {
    (0, _assert().default)(false);
  }
})();

exports.createImportClause = createImportClause;

const createImportDeclaration = (() => {
  if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 8) {
    return (factory, modifiers, importClause, moduleSpecifier, assertClause) => factory.createImportDeclaration(modifiers, importClause, moduleSpecifier, assertClause);
  } else if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 5) {
    return (factory, modifiers, importClause, moduleSpecifier, assertClause) => factory.createImportDeclaration(undefined
    /* decorators */
    , modifiers, importClause, moduleSpecifier, assertClause);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 0) {
    return (factory, modifiers, importClause, moduleSpecifier) => factory.createImportDeclaration(undefined
    /* decorators */
    , modifiers, importClause, moduleSpecifier);
  } else {
    (0, _assert().default)(false);
  }
})();

exports.createImportDeclaration = createImportDeclaration;

const createImportSpecifier = (() => {
  if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 5) {
    return (factory, isTypeOnly, propertyName, name) => factory.createImportSpecifier(isTypeOnly, propertyName, name);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 0) {
    return (factory, isTypeOnly, propertyName, name) => factory.createImportSpecifier(propertyName, name);
  } else {
    (0, _assert().default)(false);
  }
})();

exports.createImportSpecifier = createImportSpecifier;

const updateExportDeclaration = (() => {
  if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 8) {
    return (factory, node, modifiers, isTypeOnly, exportClause, moduleSpecifier, assertClause) => factory.updateExportDeclaration(node, modifiers, isTypeOnly, exportClause, moduleSpecifier, assertClause);
  } else if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 5) {
    return (factory, node, modifiers, isTypeOnly, exportClause, moduleSpecifier, assertClause) => factory.updateExportDeclaration(node, undefined
    /* decorators */
    , modifiers, isTypeOnly, exportClause, moduleSpecifier, assertClause);
  } else if (majorVersion > 4 || majorVersion === 4 && minorVersion >= 0) {
    return (factory, node, modifiers, isTypeOnly, exportClause, moduleSpecifier) => factory.updateExportDeclaration(node, undefined
    /* decorators */
    , modifiers, isTypeOnly, exportClause, moduleSpecifier);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 8) {
    return (factory, node, modifiers, isTypeOnly, exportClause, moduleSpecifier) => factory.updateExportDeclaration(node, undefined
    /* decorators */
    , modifiers, exportClause, moduleSpecifier, isTypeOnly);
  } else if (majorVersion > 3 || majorVersion === 3 && minorVersion >= 0) {
    return (factory, node, modifiers, isTypeOnly, exportClause, moduleSpecifier) => factory.updateExportDeclaration(node, undefined
    /* decorators */
    , modifiers, exportClause, moduleSpecifier);
  } else {
    (0, _assert().default)(false);
  }
})();

exports.updateExportDeclaration = updateExportDeclaration;