# graphql-import-macro

[![license](https://img.shields.io/github/license/squirly/graphql-import-macro.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

A parser and expander for GraphQL imports, with minimal dependencies.

## Table of Contents

-   [Background](#background)
-   [Install](#install)
-   [Usage](#usage)
-   [API](#api)
-   [Contributing](#contributing)
-   [License](#license)

## Background

There is a relatively standardized syntax for imports in GraphQL. This library
aims to provide a reference implementation with minimal dependencies.

The primary target audience of this library are tools that want to support a
standardized GraphQL import.

### Goals

-   Provide reusabily and allow the DRY principal in GraphQL. Primarily focusing
    on
    [GraphQL Document](https://spec.graphql.org/June2018/#sec-Language.Document).

### Non-goals

-   Becoming part of the GraphQL spec.
    -   The GraphQL spec defines a query language, much like SQL and does not
        need the complexities of imports.
        https://github.com/graphql/graphql-spec/issues/343#issuecomment-426153002

## Install

```bash
npm install graphql-import-macro
```

## Usage

```js
import {parse, Source} from "graphql";
import {processDocumentImports} from "graphql-import-macro";

const ast = parse(new Source(content, path));

const resolvedAst = await processDocumentImports(ast);

console.log(resolvedAst);
```

### Supported Syntax

Whitespace is ignored, except where necessary to parse tokens (`import`, `*`,
`,`, and `from`).

#### Macro Matcher

All matches of the following RegEX will be treated as imports:

```regex
#\s*import\s+(.+)\s*(?:\n|\r(?!\n)|\r\n|$)
```

[![Regular expression visualization](https://www.debuggex.com/i/YYSM4MAysi5rXOoV.png)](https://www.debuggex.com/r/YYSM4MAysi5rXOoV)

See:

-   [GraphQL Comments](https://spec.graphql.org/June2018/#sec-Comments)
-   [GraphQL Line Terminator](https://spec.graphql.org/June2018/#LineTerminator)

#### Supported Import Formats

Import all:

```graphql
#import 'path.graphql'
#import * from 'path.graphql'
```

Named Import:

```graphql
#import A, B, C from 'path.graphql'
```

Group 1 from all imports will be matched against the following RegEx

```regex
^(?:(?:\*|((?:[_A-Za-z][_0-9A-Za-z]+\s*,\s*)*[_A-Za-z][_0-9A-Za-z]+))\s+from\s+|)?(?:'(.+)'|"(.+)")$
```

[![Regular expression visualization](https://www.debuggex.com/i/CNTDhwl2OIBZoiQO.png)](https://www.debuggex.com/r/CNTDhwl2OIBZoiQO)

-   Group 1 is used to determine if all or some of the imported file should be
    included.
-   Group 2 & 3 are used to get the relative file path.

## API

### Documents

Each AST `DocumentNode` must be created from a `Source` instantiated with at
least two parameters. This ensures that correct path information is attached.

```js
import {parse, Source} from "graphql";

const ast = parse(new Source(content, path));
```

#### `processDocumentImports(ast, importResolver?)`

Given an AST and optional resolver, parses imports and expands them recursively.

The loader argument can be passed to use custom loading logic and must conform
to the following:

```ts
import type {DocumentNode} from "graphql";

let importResolver: (from: string, to: string) => Promise<DocumentNode>;
```

## Contributing

PRs accepted. Commit messages must conform to the default
[Semantic Release format](https://github.com/semantic-release/semantic-release#commit-message-format).

Small note: If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT © Tyler David Jones](../LICENSE)
