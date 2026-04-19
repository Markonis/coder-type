export {};

declare global {
  interface Array<T> {
    readonly first: T;
    readonly last: T;
  }
}

// Implementation
Object.defineProperty(Array.prototype, "first", {
  get: function <T>(this: T[]): T {
    return this[0];
  },
  configurable: true,
  enumerable: false,
});

Object.defineProperty(Array.prototype, "last", {
  get: function <T>(this: T[]): T {
    return this[this.length - 1];
  },
  configurable: true,
  enumerable: false,
});
