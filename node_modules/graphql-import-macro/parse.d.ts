import { Import, Matcher } from "./matchers";
export declare function parseImports<T>(body: string, matchers: Matcher<T>[]): Import<T>[];
export declare function parseComments(body: string): string[];
export declare function parseMacroFromComment(comment: string): string | undefined;
