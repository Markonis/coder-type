"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExportedName = getExportedName;
exports.isDeclaration = isDeclaration;

function _typescript() {
  const data = _interopRequireDefault(require("typescript"));

  _typescript = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getExportedName(node) {
  if (!node.modifiers) {
    return null;
  }

  if (!node.modifiers.some(m => m.kind === _typescript().default.SyntaxKind.ExportKeyword)) {
    return null;
  }

  if (node.modifiers.some(m => m.kind === _typescript().default.SyntaxKind.DefaultKeyword)) {
    return 'default';
  }

  return node.name.text;
}

function isDeclaration(node) {
  return _typescript().default.isFunctionDeclaration(node) || _typescript().default.isClassDeclaration(node) || _typescript().default.isInterfaceDeclaration(node) || _typescript().default.isEnumDeclaration(node) || _typescript().default.isTypeAliasDeclaration(node);
}