import { DocumentNode } from "graphql";
export declare function isDefined<T>(value: T | undefined): value is T;
export declare function ensureSource(document: DocumentNode): {
    filePath: string;
    body: string;
};
