import { Repo } from ".";

export const reactRepo: Repo = {
	label: "React",
	url: "https://github.com/facebook/react",
	files: [
		{
			path: "/packages/react-dom/src/server/ReactDOMFizzServerBrowser.js",
			code:
				`
type ReactDOMServerReadableStream = ReadableStream & {
  allReady: Promise<void>,
};

function renderToReadableStream(
  children: ReactNodeList,
  options?: Options,
): Promise<ReactDOMServerReadableStream> {
  return new Promise((resolve, reject) => {
    let onFatalError;
    let onAllReady;
    const allReady = new Promise<void>((res, rej) => {
      onAllReady = res;
      onFatalError = rej;
    });

    function onShellReady() {
      const stream: ReactDOMServerReadableStream = (new ReadableStream(
        {
          type: 'bytes',
          pull: (controller): ?Promise<void> => {
            startFlowing(request, controller);
          },
          cancel: (reason): ?Promise<void> => {
            abort(request);
          },
        },
        // $FlowFixMe size() methods are not allowed on byte streams.
        {highWaterMark: 0},
      ): any);
      stream.allReady = allReady;
      resolve(stream);
    }
`
		},
		{
			path: "/packages/react/src/ReactElement.js",
			code:
				`
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

let specialPropKeyWarningShown,
  specialPropRefWarningShown,
  didWarnAboutStringRefs;

if (__DEV__) {
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'ref')) {
      const getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'key')) {
      const getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}
`
		},
		{
			path: "/packages/react-cache/src/LRU.js",
			code:
				`
function deleteLeastRecentlyUsedEntries(targetSize: number) {
	if (first !== null) {
		const resolvedFirst: Entry<T> = (first: any);
		let last: null | Entry<T> = resolvedFirst.previous;
		while (size > targetSize && last !== null) {
			const onDelete = last.onDelete;
			const previous = last.previous;
			last.onDelete = (null: any);
			last.previous = last.next = (null: any);
			if (last === first) {
				first = last = null;
			} else {
				(first: any).previous = previous;
				previous.next = (first: any);
				last = previous;
			}
			size -= 1;
			onDelete();
		}
	}
}
`
		},
		{
			path: "/packages/react-art/src/ReactART.js",
			code:
				`
class Surface extends React.Component {
  componentDidMount() {
    const {height, width} = this.props;
    this._surface = Mode.Surface(+width, +height, this._tagRef);
    this._mountNode = createContainer(
      this._surface,
      LegacyRoot,
      null,
      false,
      false,
      '',
    );
    updateContainer(this.props.children, this._mountNode, this);
  }
  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    if (props.height !== prevProps.height || props.width !== prevProps.width) {
      this._surface.resize(+props.width, +props.height);
    }
    updateContainer(this.props.children, this._mountNode, this);
    if (this._surface.render) {
      this._surface.render();
    }
  }
  componentWillUnmount() {
    updateContainer(null, this._mountNode, this);
  }
  render() {
    const props = this.props;
    const Tag = Mode.Surface.tagName;
    return (
      <Tag
        ref={ref => (this._tagRef = ref)}
        accessKey={props.accessKey}
        className={props.className}
        draggable={props.draggable}
        role={props.role}
        style={props.style}
        tabIndex={props.tabIndex}
        title={props.title}
      />
    );
  }
}
`
		},
		{
			path: "/packages/react/src/ReactChildren.js",
			code:
				`
function mapIntoArray(
  children: ?ReactNodeList,
  array: Array<React$Node>,
  escapedPrefix: string,
  nameSoFar: string,
  callback: (?React$Node) => ?ReactNodeList,
): number {
  const type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  let invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch ((children: any).$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }
  if (invokeCallback) {
    const child = children;
    let mappedChild = callback(child);
    const childKey =
      nameSoFar === '' ? SEPARATOR + getElementKey(child, 0) : nameSoFar;
    if (isArray(mappedChild)) {
      let escapedChildKey = '';
      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }
      mapIntoArray(mappedChild, array, escapedChildKey, '', c => c);
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        if (__DEV__) {
          if (mappedChild.key && (!child || child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }
        mappedChild = cloneAndReplaceKey(
          mappedChild,
          escapedPrefix +
            (mappedChild.key && (!child || child.key !== mappedChild.key)
              ? escapeUserProvidedKey(
                  '' + mappedChild.key, // eslint-disable-line react-internal/safe-string-coercion
                ) + '/'
              : '') +
            childKey,
        );
      }
      array.push(mappedChild);
    }
    return 1;
  }

  let child;
  let nextName;
  let subtreeCount = 0;
  const nextNamePrefix =
    nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(
        child,
        array,
        escapedPrefix,
        nextName,
        callback,
      );
    }
  } else {
    const iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      const iterableChildren: Iterable<React$Node> & {
        entries: any,
      } = (children: any);

      const iterator = iteratorFn.call(iterableChildren);
      let step;
      let ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(
          child,
          array,
          escapedPrefix,
          nextName,
          callback,
        );
      }
    } else if (type === 'object') {
      const childrenString = String((children: any));

      throw new Error(
        \`Objects are not valid as a React child (found: \${
          childrenString === '[object Object]'
            ? 'object with keys {' +
              Object.keys((children: any)).join(', ') +
              '}'
            : childrenString
        }). \` +
          'If you meant to render a collection of children, use an array ' +
          'instead.',
      );
    }
  }

  return subtreeCount;
}
`
		}
	]
}
