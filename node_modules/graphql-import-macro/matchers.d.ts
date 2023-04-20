export declare type Matcher<T> = (macro: string) => Import<T> | null;
export declare type Import<T> = {
    from: string;
    imports: T;
};
export declare const IMPORT_ALL = "ALL";
export declare type IMPORT_ALL = typeof IMPORT_ALL;
export declare const IMPORT_ALL_MATCHER: RegExp;
export declare const importAll: Matcher<IMPORT_ALL>;
export declare const IMPORT_ALL_EXPLICIT_MATCHER: RegExp;
export declare const importAllExplicit: Matcher<IMPORT_ALL>;
export declare const IMPORT_NAMED_MATCHER: RegExp;
export declare const importNamed: Matcher<string[]>;
