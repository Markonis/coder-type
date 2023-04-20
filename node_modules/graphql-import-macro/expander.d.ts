import { DefinitionNode, DocumentNode } from "graphql/language";
import { IMPORT_ALL } from "./matchers";
export declare function expandDocumentImports(document: DocumentNode, imports: ResolvedImport<IMPORT_ALL | string[]>[]): DocumentNode;
export declare type ResolvedImport<T> = {
    document: DocumentNode;
    imports: T;
};
export declare function getImportedAstNodes(imports: string[], document: DocumentNode): DefinitionNode[];
