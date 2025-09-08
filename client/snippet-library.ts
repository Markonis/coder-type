export type Snippet = {
  key: string;
  label: string;
  language: string;
  text: string;
};

export const snippets: Snippet[] = [
  {
    key: "js-1",
    label: "Simple Javascript",
    language: "javascript",
    text: `export function $dispatcherGuard(kind: GuardKind) {
  const curr = ReactSecretInternals.ReactCurrentDispatcher.current;
  if (kind === GuardKind.PushGuardContext) {
    // Push before checking invariant or errors
    guardFrames.push(curr);

    if (guardFrames.length === 1) {
      // save if we're the first guard on the stack
      originalDispatcher = curr;
    }`,
  },
  {
    key: "js-2",
    label: "Simple Javascript 2",
    language: "javascript",
    text: "const a = 'x';\n\tconst b = 'y';",
  },
];
