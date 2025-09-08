export type Snippet = {
  label: string;
  url: string;
  language: string;
  text: string;
};

export type TypeDetail = {
  isCorrect: boolean;
};

export type TrackedTypeDetail = {
  timestamp: number;
  detail: TypeDetail | null;
};

export type TypingReport = {
  duration: number;
  tracked: TrackedTypeDetail[];
};
