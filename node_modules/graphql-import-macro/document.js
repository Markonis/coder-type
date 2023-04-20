"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var language_1 = require("graphql/language");
var expander_1 = require("./expander");
var importResolver_1 = require("./importResolver");
var parse_1 = require("./parse");
var matchers = __importStar(require("./matchers"));
var utils_1 = require("./utils");
/**
 * Parse and expand all imports, recursively
 */
function processDocumentImports(document, loadImport) {
    if (loadImport === void 0) { loadImport = importResolver_1.defaultImportResolver; }
    return __awaiter(this, void 0, void 0, function () {
        var filePath, resolvedImports;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = utils_1.ensureSource(document).filePath;
                    return [4 /*yield*/, Promise.all(parseDocumentImports(document).map(function (_a) {
                            var imports = _a.imports, to = _a.from;
                            return __awaiter(_this, void 0, void 0, function () {
                                var _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _b = {
                                                imports: imports
                                            };
                                            _c = processDocumentImports;
                                            return [4 /*yield*/, loadImport(filePath, to)];
                                        case 1: return [4 /*yield*/, _c.apply(void 0, [_d.sent(),
                                                loadImport])];
                                        case 2: return [2 /*return*/, (_b.document = _d.sent(),
                                                _b)];
                                    }
                                });
                            });
                        }))];
                case 1:
                    resolvedImports = _a.sent();
                    return [2 /*return*/, expander_1.expandDocumentImports(document, resolvedImports)];
            }
        });
    });
}
exports.processDocumentImports = processDocumentImports;
function parseDocumentImports(document) {
    var _a = utils_1.ensureSource(document), filePath = _a.filePath, body = _a.body;
    var invalidDefinitions = document.definitions.filter(function (d) { return !language_1.isExecutableDefinitionNode(d); });
    if (invalidDefinitions.length > 0) {
        throw new Error("Only executable definitions are supported in GraphQL Documents." +
            ("\nFile: " + filePath) +
            "\nSee http://spec.graphql.org/June2018/#sec-Documents");
    }
    return parse_1.parseImports(body, documentImportMatchers);
}
exports.parseDocumentImports = parseDocumentImports;
var documentImportMatchers = [
    matchers.importAll,
    matchers.importAllExplicit,
    matchers.importNamed,
];
//# sourceMappingURL=document.js.map