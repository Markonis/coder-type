"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var language_1 = require("graphql/language");
var matchers_1 = require("./matchers");
function expandDocumentImports(document, imports) {
    return __assign(__assign({}, document), { definitions: imports.reduce(function (acc, importMeta) {
            return acc.concat(importMeta.imports === matchers_1.IMPORT_ALL
                ? importMeta.document.definitions
                : getImportedAstNodes(importMeta.imports, importMeta.document));
        }, document.definitions) });
}
exports.expandDocumentImports = expandDocumentImports;
function getImportedAstNodes(imports, document) {
    var importNames = new Set(imports);
    var namedDefinitionNodes = document.definitions.filter(isNamedNode);
    var requiredNames = new Set(namedDefinitionNodes
        .filter(function (_a) {
        var name = _a.name;
        return importNames.has(name.value);
    })
        // flatMap
        .reduce(function (acc, definition) { return __spreadArrays(acc, [
        definition.name.value
    ], getOperationNodeDependencyNames(definition)); }, []));
    return namedDefinitionNodes.filter(function (definition) {
        return requiredNames.has(definition.name.value);
    });
}
exports.getImportedAstNodes = getImportedAstNodes;
function getOperationNodeDependencyNames(node) {
    var names = new Set();
    language_1.visit(node, {
        FragmentSpread: function (_a) {
            var name = _a.name;
            names.add(name.value);
        },
    });
    return Array.from(names);
}
function isNamedNode(node) {
    return "name" in node && node.name !== undefined;
}
//# sourceMappingURL=expander.js.map