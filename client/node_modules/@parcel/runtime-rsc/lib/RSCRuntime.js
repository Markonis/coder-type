"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _plugin() {
  const data = require("@parcel/plugin");
  _plugin = function () {
    return data;
  };
  return data;
}
function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));
  _nullthrows = function () {
    return data;
  };
  return data;
}
function _utils() {
  const data = require("@parcel/utils");
  _utils = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = _interopRequireDefault(require("path"));
  _path = function () {
    return data;
  };
  return data;
}
function _rust() {
  const data = require("@parcel/rust");
  _rust = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = new (_plugin().Runtime)({
  async loadConfig({
    config,
    options
  }) {
    // This logic must be synced with the packager...
    let packageName = await config.getConfigFrom(options.projectRoot + '/index', [], {
      packageKey: 'name'
    });
    let name = (packageName === null || packageName === void 0 ? void 0 : packageName.contents) ?? '';
    return {
      parcelRequireName: 'parcelRequire' + (0, _rust().hashString)(name).slice(-4)
    };
  },
  apply({
    bundle,
    bundleGraph,
    config
  }) {
    if (bundle.type !== 'js' || bundle.env.context !== 'react-server' && bundle.env.context !== 'react-client') {
      return [];
    }
    let runtimes = [];
    bundle.traverse(node => {
      if (node.type === 'dependency') {
        var _resolvedAsset$meta;
        let resolvedAsset = bundleGraph.getResolvedAsset(node.value, bundle);
        let directives = resolvedAsset === null || resolvedAsset === void 0 || (_resolvedAsset$meta = resolvedAsset.meta) === null || _resolvedAsset$meta === void 0 ? void 0 : _resolvedAsset$meta.directives;

        // Server dependency on a client component.
        if (node.value.env.isServer() && resolvedAsset && Array.isArray(directives) && directives.includes('use client')) {
          let bundles;
          let async = bundleGraph.resolveAsyncDependency(node.value, bundle);
          if ((async === null || async === void 0 ? void 0 : async.type) === 'bundle_group') {
            bundles = bundleGraph.getBundlesInBundleGroup(async.value, {
              includeIsolated: false
            });
          } else {
            bundles = bundleGraph.getReferencedBundles(bundle, {
              includeIsolated: false
            });
          }
          let importMap = {};
          let jsBundles = bundles.filter(b => b.type === 'js' && b.env.isBrowser()).map(b => {
            let name = (0, _utils().normalizeSeparators)(b.name);
            Object.assign(importMap, (0, _utils().getImportMap)(bundleGraph, b));
            return name;
          });
          let code = `import {createClientReference} from "react-server-dom-parcel/server.edge";\n`;
          let resources = [];
          if (node.value.priority === 'lazy') {
            // If this is an async boundary, inject CSS.
            // JS for client components is injected by prepareDestinationForModule in React.
            for (let b of bundles) {
              if (b.type === 'css') {
                resources.push(renderStylesheet(bundle, b));
              }
            }
            if (resources.length) {
              code += `let resources = ${resources.length > 1 ? '<>' + resources.join('\n') + '</>' : resources[0]};\n`;
            }
          }
          let count = 0;
          for (let symbol of bundleGraph.getExportedSymbols(resolvedAsset, bundle)) {
            let ref = `createClientReference(${JSON.stringify(bundleGraph.getAssetPublicId(symbol.asset))}, ${JSON.stringify(symbol.exportSymbol)}, ${JSON.stringify(jsBundles)}${Object.keys(importMap).length > 0 ? ', ' + JSON.stringify(importMap) : ''})`;
            if (resources.length) {
              code += `var Ref${++count} = ${ref};\n`;
              code += `exports[${JSON.stringify(symbol.exportAs)}] = (props) => <>{resources}<Ref${count} {...props} /></>;\n`;
            } else {
              code += `exports[${JSON.stringify(symbol.exportAs)}] = ${ref};\n`;
            }
          }
          code += `exports.__esModule = true;\n`;
          if (node.value.priority === 'lazy') {
            code += 'module.exports = Promise.resolve(exports);\n';
          }
          runtimes.push({
            filePath: replaceExtension(resolvedAsset.filePath),
            code,
            dependency: node.value,
            env: {
              sourceType: 'module'
            }
          });

          // Dependency on a server action.
        } else if (resolvedAsset && Array.isArray(directives) && directives.includes('use server')) {
          let code;
          if (node.value.env.isServer()) {
            // Dependency on a "use server" module from a server environment.
            // Mark each export as a server reference that can be passed to a client component as a prop.
            code = `import {registerServerReference} from "react-server-dom-parcel/server.edge";\n`;
            let publicId = JSON.stringify(bundleGraph.getAssetPublicId(resolvedAsset));
            code += `let originalModule = parcelRequire(${publicId});\n`;
            code += `for (let key in originalModule) {\n`;
            code += `  Object.defineProperty(exports, key, {\n`;
            code += `    enumerable: true,\n`;
            code += `    get: () => {\n`;
            code += `      let value = originalModule[key];\n`;
            code += `      if (typeof value === 'function' && !value.$$typeof) {\n`;
            code += `        registerServerReference(value, ${publicId}, key);\n`;
            code += `      }\n`;
            code += `      return value;\n`;
            code += `    }\n`;
            code += `  });\n`;
            code += `}\n`;
          } else {
            var _usedSymbols;
            // Dependency on a "use server" module from a client environment.
            // Create a client proxy module that will call the server.
            code = `import {createServerReference} from "react-server-dom-parcel/client";\n`;
            let usedSymbols = bundleGraph.getUsedSymbols(resolvedAsset);
            if ((_usedSymbols = usedSymbols) !== null && _usedSymbols !== void 0 && _usedSymbols.has('*')) {
              usedSymbols = null;
            }
            for (let symbol of bundleGraph.getExportedSymbols(resolvedAsset, bundle)) {
              if (usedSymbols && !usedSymbols.has(symbol.exportAs)) {
                continue;
              }
              code += `exports[${JSON.stringify(symbol.exportAs)}] = createServerReference(${JSON.stringify(bundleGraph.getAssetPublicId(symbol.asset))}, ${JSON.stringify(symbol.exportSymbol)});\n`;
            }
          }
          code += `exports.__esModule = true;\n`;
          if (node.value.priority === 'lazy') {
            code += 'module.exports = Promise.resolve(exports);\n';
          }
          runtimes.push({
            filePath: replaceExtension(resolvedAsset.filePath),
            code,
            dependency: node.value,
            env: {
              sourceType: 'module'
            },
            shouldReplaceResolution: true
          });

          // Server dependency on a client entry.
        } else if (node.value.env.isServer() && resolvedAsset && Array.isArray(directives) && directives.includes('use client-entry')) {
          // Resolve to an empty module so the client entry does not run on the server.
          runtimes.push({
            filePath: replaceExtension(resolvedAsset.filePath),
            code: '',
            dependency: node.value,
            env: {
              sourceType: 'module'
            }
          });
        } else {
          // Handle bundle group boundaries to automatically inject resources like CSS.
          // This is normally handled by the JS runtime, but we need to add resources to the
          // React tree so they get loaded during SSR as well.
          let asyncResolution = bundleGraph.resolveAsyncDependency(node.value);
          if ((asyncResolution === null || asyncResolution === void 0 ? void 0 : asyncResolution.type) === 'bundle_group') {
            let bundles = bundleGraph.getBundlesInBundleGroup(asyncResolution.value, {
              includeIsolated: false
            });
            let resources = [];
            let js = [];
            let preinit = [];
            let css = [];
            let bootstrapModules = [];
            let entry;
            let importMap = {};
            for (let b of bundles) {
              if (b.type === 'css') {
                resources.push(renderStylesheet(bundle, b));
                if (bundle.env.isBrowser()) {
                  let url = (0, _utils().urlJoin)(b.target.publicUrl, b.name);
                  preinit.push(`preinit(parcelRequire.resolve(${JSON.stringify(b.publicId)}), {as: 'style', precedence: 'default'});`);
                  css.push(`waitForCSS(${JSON.stringify(url)})`);
                }
              } else if (b.type === 'js') {
                if (b.env.isBrowser()) {
                  let url = (0, _utils().urlJoin)(b.target.publicUrl, b.name);
                  // Preload scripts for dynamic imports during SSR.
                  // Can't use <script> because there might not be a prelude available yet.
                  if (bundle.env.isBrowser()) {
                    if (b.env.outputFormat === 'esmodule') {
                      resources.push(`<link rel="modulepreload" href=${resolveURL(bundle, b)} />`);
                    } else {
                      resources.push(`<link rel="preload" as="script" href=${resolveURL(bundle, b)} />`);
                    }
                  }
                  bootstrapModules.push(url);
                  Object.assign(importMap, (0, _utils().getImportMap)(bundleGraph, b));
                }
                if (b.env.context === bundle.env.context) {
                  if (b.env.outputFormat === 'esmodule') {
                    js.push(`parcelRequire.load(${JSON.stringify(b.publicId)})`);
                  } else if (b.env.outputFormat === 'commonjs') {
                    let relativePath = JSON.stringify((0, _utils().relativeBundlePath)(bundle, b));
                    js.push(`Promise.resolve(__parcel__require__(${relativePath}))`);
                  } else {
                    throw new Error('Unsupported output format: ' + b.env.outputFormat);
                  }
                }

                // Find the client entry in this bundle group if any.
                if (bundle.env.isServer() && b.env.isBrowser() && !entry) {
                  b.traverseAssets((a, ctx, actions) => {
                    if (Array.isArray(a.meta.directives) && a.meta.directives.includes('use client-entry')) {
                      entry = a;
                      actions.stop();
                    }
                  });
                }
              }
            }
            if (resources.length > 0 || node.value.priority !== 'lazy' && entry) {
              var _resolvedAsset$symbol;
              // Use a proxy to attach resources to all exports.
              // This will be used by the JSX runtime to automatically render CSS at bundle group boundaries.
              let code = `import {createResourcesProxy, waitForCSS} from '@parcel/runtime-rsc/rsc-helpers';\n`;
              if (node.value.priority === 'lazy') {
                if (preinit.length) {
                  // Start preloading CSS via React.
                  code += `import {preinit} from 'react-dom';\n`;
                  code += preinit.join('\n') + '\n';
                }
                code += `let promise = Promise.all([${js.join(', ')}]).then(() => {\n`;
                // If promise is not being loaded by React.lazy, wait for CSS to load.
                // Otherwise, React will suspend on the rendered <link> element in the resources.
                // This allows React to start rendering earlier if the CSS takes longer to load.
                if (css.length && node.value.meta.isReactLazy !== true) {
                  code += `  return Promise.all([${css.join(', ')}]);\n`;
                  code += '}).then(() => {\n';
                }
              }

              // Also attach a bootstrap script which will be injected into the initial HTML.
              if (node.value.priority !== 'lazy' && entry) {
                let parcelRequireName = (0, _nullthrows().default)(config).parcelRequireName;
                let bootstrapScript = `Promise.all([${bootstrapModules.map(m => `import("${m}")`).join(',')}]).then(()=>`;
                if (Object.keys(importMap).length > 0) {
                  bootstrapScript += `(Object.assign(${parcelRequireName}.i??={},${JSON.stringify(importMap)}),`;
                }
                bootstrapScript += `${parcelRequireName}(${JSON.stringify(bundleGraph.getAssetPublicId(entry))}))`;
                if (Object.keys(importMap).length > 0) {
                  bootstrapScript += ')';
                }
                code += `let bootstrapScript = ${JSON.stringify(bootstrapScript)};\n`;
              }
              let resolvedAsset = bundleGraph.getAssetById(asyncResolution.value.entryAssetId);
              code += `let originalModule = parcelRequire(${JSON.stringify(bundleGraph.getAssetPublicId(resolvedAsset))});\n`;
              code += `let resources = ${resources.length > 1 ? '<>\n  ' + resources.join('\n  ') + '\n</>' : resources[0]};\n`;
              let esModule = ((_resolvedAsset$symbol = resolvedAsset.symbols.get('default')) === null || _resolvedAsset$symbol === void 0 || (_resolvedAsset$symbol = _resolvedAsset$symbol.meta) === null || _resolvedAsset$symbol === void 0 ? void 0 : _resolvedAsset$symbol.isEsm) === true;
              code += `let res = createResourcesProxy(originalModule, ${String(esModule)}, resources ${node.value.priority !== 'lazy' && entry ? ', bootstrapScript' : ''});\n`;
              if (node.value.priority === 'lazy') {
                code += `  return res;\n`;
                code += `});\n`;
                code += `module.exports = promise;\n`;
              } else {
                code += `module.exports = res;\n`;
              }
              let filePath = (0, _nullthrows().default)(node.value.sourcePath);
              runtimes.push({
                filePath: replaceExtension(filePath),
                code,
                dependency: node.value,
                env: {
                  sourceType: 'module'
                }
              });
            }
          }
        }
      }
    });

    // Register server actions in the server entry point.
    if (bundle.env.isServer() && bundleGraph.getParentBundles(bundle).length === 0) {
      var _bundle$getMainEntry;
      let serverActions = '';
      bundleGraph.traverse(node => {
        var _node$value$meta;
        if (node.type === 'asset' && Array.isArray((_node$value$meta = node.value.meta) === null || _node$value$meta === void 0 ? void 0 : _node$value$meta.directives) && node.value.meta.directives.includes('use server')) {
          let bundlesWithAsset = bundleGraph.getBundlesWithAsset(node.value);
          let bundles = new Set();
          let referenced = bundleGraph.getReferencedBundles(bundlesWithAsset[0]);
          bundles.add((0, _utils().normalizeSeparators)(bundlesWithAsset[0].name));
          for (let r of referenced) {
            if (r.type === 'js' && r.env.context === bundle.env.context) {
              bundles.add((0, _utils().normalizeSeparators)(r.name));
            }
          }
          serverActions += `  ${JSON.stringify(bundleGraph.getAssetPublicId(node.value))}: ${JSON.stringify([...bundles])},\n`;
        }
      });
      let code = '';
      if (serverActions.length > 0) {
        code += 'import {registerServerActions} from "react-server-dom-parcel/server.edge";\n';
        code += `registerServerActions({\n`;
        code += serverActions;
        code += '});\n';
      }

      // React needs AsyncLocalStorage defined as a global for the edge environment.
      // Without this, preinit scripts won't be inserted during SSR.
      code += 'if (typeof AsyncLocalStorage === "undefined") {\n';
      code += '  try {\n';
      code += '    globalThis.AsyncLocalStorage = require("node:async_hooks").AsyncLocalStorage;\n';
      code += '  } catch {}\n';
      code += '}\n';
      runtimes.push({
        filePath: replaceExtension(((_bundle$getMainEntry = bundle.getMainEntry()) === null || _bundle$getMainEntry === void 0 ? void 0 : _bundle$getMainEntry.filePath) ?? __filename),
        code,
        isEntry: true,
        env: {
          sourceType: 'module'
        }
      });
    }
    return runtimes;
  }
});
function replaceExtension(filePath, extension = '.jsx') {
  let ext = _path().default.extname(filePath);
  return filePath.slice(0, -ext.length) + extension;
}
function renderStylesheet(from, to) {
  return `<link rel="stylesheet" href=${resolveURL(from, to)} precedence="default" />`;
}
function resolveURL(from, to) {
  if (from.env.isServer()) {
    let url = (0, _utils().urlJoin)(to.target.publicUrl, to.name);
    return JSON.stringify(url);
  }
  return `{parcelRequire.resolve(${JSON.stringify(to.publicId)})}`;
}