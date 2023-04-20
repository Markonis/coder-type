"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDefined(value) {
    return value !== undefined;
}
exports.isDefined = isDefined;
function ensureSource(document) {
    if (document.loc === undefined) {
        throw new Error("DocumentNode mush have a loc. It should be created with `new Source(body, filePath)`.");
    }
    if (document.loc.source.name === "GraphQL request") {
        throw new Error("DocumentNode was not created with an explicit path. It should be created with `new Source(body, filePath)`.");
    }
    return {
        filePath: document.loc.source.name,
        body: document.loc.source.body.slice(document.loc.start, document.loc.end),
    };
}
exports.ensureSource = ensureSource;
//# sourceMappingURL=utils.js.map