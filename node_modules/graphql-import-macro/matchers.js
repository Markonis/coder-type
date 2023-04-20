"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PATH_REGEX = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["(?:'(.+)'|\"(.+)\")"], ["(?:'(.+)'|\"(.+)\")"])));
exports.IMPORT_ALL = "ALL";
// import 'path.graphql'
exports.IMPORT_ALL_MATCHER = new RegExp(String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["^"], ["^"]))) + // START: Match entire string
    PATH_REGEX + // Path Component
 String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["$"], ["$"]))));
exports.importAll = function (macro) {
    var match = macro.match(exports.IMPORT_ALL_MATCHER);
    return match
        ? {
            from: filePathFromMatch(match),
            imports: exports.IMPORT_ALL,
        }
        : null;
};
// import * from 'path.graphql'
exports.IMPORT_ALL_EXPLICIT_MATCHER = new RegExp(String.raw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["^"], ["^"]))) + // START: Match entire string
 String.raw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["*s+froms+"], ["\\*\\s+from\\s+"]))) + // `* from `
    PATH_REGEX + // Path Component
 String.raw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["$"], ["$"]))));
exports.importAllExplicit = function (macro) {
    var match = macro.match(exports.IMPORT_ALL_EXPLICIT_MATCHER);
    return match
        ? {
            from: filePathFromMatch(match),
            imports: exports.IMPORT_ALL,
        }
        : null;
};
// Names : https://spec.graphql.org/June2018/#sec-Names
var NAME_REGEX = String.raw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["[_A-Za-z][_0-9A-Za-z]*"], ["[_A-Za-z][_0-9A-Za-z]*"])));
// import A, B from 'path.graphql'
exports.IMPORT_NAMED_MATCHER = new RegExp(String.raw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["^"], ["^"]))) + // START: Match entire string
 String.raw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["("], ["("]))) + // START: Match names
 String.raw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["(?:", "s*,s*)*"], ["(?:", "\\s*,\\s*)*"])), NAME_REGEX) + // list of names
    NAME_REGEX + // name
 String.raw(templateObject_11 || (templateObject_11 = __makeTemplateObject([")"], [")"]))) + // END: Match names
 String.raw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["s+froms+"], ["\\s+from\\s+"]))) + // ` from `
    PATH_REGEX + // Path Component
 String.raw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["$"], ["$"]))));
exports.importNamed = function (macro) {
    var match = macro.match(exports.IMPORT_NAMED_MATCHER);
    return match
        ? {
            from: filePathFromMatch(match),
            imports: match[1].split(",").map(function (name) { return name.trim(); }),
        }
        : null;
};
function filePathFromMatch(match) {
    var filePathMatches = match.slice(-2);
    return filePathMatches[0] || filePathMatches[1];
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=matchers.js.map