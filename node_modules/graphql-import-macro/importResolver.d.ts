import { DocumentNode } from "graphql/language";
export declare type ImportResolver = (from: string, to: string) => Promise<DocumentNode>;
export declare const defaultImportResolver: ImportResolver;
