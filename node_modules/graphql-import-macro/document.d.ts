import { DocumentNode } from "graphql/language";
import { ImportResolver } from "./importResolver";
import { Import, IMPORT_ALL } from "./matchers";
/**
 * Parse and expand all imports, recursively
 */
export declare function processDocumentImports(document: DocumentNode, loadImport?: ImportResolver): Promise<DocumentNode>;
export declare function parseDocumentImports(document: DocumentNode): Import<IMPORT_ALL | string[]>[];
