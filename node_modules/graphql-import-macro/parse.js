"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function parseImports(body, matchers) {
    return parseComments(body)
        .map(parseMacroFromComment)
        .filter(utils_1.isDefined)
        .map(buildParseMacro(matchers));
}
exports.parseImports = parseImports;
// Comments : https://spec.graphql.org/June2018/#sec-Comments
var COMMENT_MATCHER = new RegExp(String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["#"], ["#"]))) + // start of comment
 String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["(.+)"], ["(.+)"]))) + // comment content
 String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["(?:\n|\r(?!\n)|\r\n|$)"], ["(?:\\n|\\r(?!\\n)|\\r\\n|$)"]))), // https://spec.graphql.org/June2018/#sec-Line-Terminators
"g");
function parseComments(body) {
    return Array.from(matchAll(body, COMMENT_MATCHER)).map(function (_a) {
        var comment = _a[1];
        return comment;
    });
}
exports.parseComments = parseComments;
function matchAll(content, matcher) {
    var clone, match;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                clone = new RegExp(matcher.source, matcher.flags.replace("g", "") + "g");
                _a.label = 1;
            case 1:
                if (!(match = clone.exec(content))) return [3 /*break*/, 3];
                return [4 /*yield*/, match];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var IMPORT_MACRO_MATCHER = /\s*import\s+(.+?)\s*$/;
function parseMacroFromComment(comment) {
    var match = comment.match(IMPORT_MACRO_MATCHER);
    return match ? match[1] : undefined;
}
exports.parseMacroFromComment = parseMacroFromComment;
function buildParseMacro(matchers) {
    return function (macro) {
        var matchOrImport = matchers.reduce(matcherReducer, macro);
        if (typeof matchOrImport === "string") {
            throw new Error("invalid import: `import " + macro + "`");
        }
        else {
            return matchOrImport;
        }
    };
}
function matcherReducer(acc, matcher) {
    if (typeof acc === "string") {
        var match = matcher(acc);
        if (match) {
            return match;
        }
    }
    return acc;
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=parse.js.map