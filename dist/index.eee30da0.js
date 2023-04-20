// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gdfbb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dcc9e7ceee30da0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5Mosj":[function(require,module,exports) {
var _data = require("./data");
var _editor = require("./editor");
var _terminal = require("./terminal");
const getRoundLine = (round, wantsToPlayAgain)=>{
    if (round === 1) return "Welcome to coder type!";
    if (wantsToPlayAgain) return "Yay! Let's play again! :)";
    return "Ah whatever, I'm just gonna let you play again! :)";
};
const writeFileHeader = async (repo, file)=>{
    (0, _terminal.clearTerminal)();
    const lines = [
        `${repo.label} it is!`,
        (0, _terminal.separatorLine),
        `Repo: ${repo.url}`,
        `File: ${file.path}`,
        " ",
        "When you are ready, start typing!",
        (0, _terminal.separatorLine),
        " "
    ];
    await (0, _terminal.writeLines)(lines);
};
const writeResult = async (result)=>{
    const errors = result.totalCharacters - result.correctCharacters;
    const accuracy = result.totalCharacters > 0 ? result.correctCharacters / result.totalCharacters * 100 : 0;
    const ccps = result.correctCharacters / result.totalTime * 60000;
    const lines = [
        result.reachedTheEnd ? "Wow you've completed the entire snippet!" : "Time's up!",
        "Here are your results:",
        (0, _terminal.separatorLine),
        " ",
        `Correct characters per minute: ${ccps.toFixed(2)}`,
        `Total errors: ${errors > 0 ? errors : "No errors, what a performance!"}`,
        `Accuracy: ${accuracy.toFixed(2)}%`,
        " ",
        (0, _terminal.separatorLine),
        "Wanna play again? (y, n)",
        " "
    ];
    await (0, _terminal.writeLines)(lines);
};
const runGame = async ()=>{
    let round = 1;
    let wantsToPlayAgain = true;
    while(true){
        (0, _terminal.clearTerminal)();
        await (0, _terminal.writeLines)([
            getRoundLine(round, wantsToPlayAgain),
            "Please select practice repo:",
            " "
        ]);
        const repo = await (0, _terminal.chooseOption)((0, _data.repoOptions));
        const file = repo.files[Math.floor(Math.random() * repo.files.length)];
        await writeFileHeader(repo, file);
        (0, _terminal.removeTerminalCursor)();
        const result = await (0, _editor.startEditor)(file.code);
        (0, _editor.clearEditor)();
        (0, _terminal.clearTerminal)();
        await writeResult(result);
        wantsToPlayAgain = await (0, _terminal.readLine)() === "y";
        round++;
    }
};
runGame();

},{"./data":"6k0oa","./editor":"1aHsF","./terminal":"j00NU"}],"6k0oa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repoOptions", ()=>repoOptions);
var _linux = require("./linux");
var _react = require("./react");
var _tensorflow = require("./tensorflow");
var _swift = require("./swift");
const repoOptions = [
    (0, _linux.linuxRepo),
    (0, _react.reactRepo),
    (0, _tensorflow.tensorFlowRepo),
    (0, _swift.swiftRepo)
];

},{"./linux":"5rmrL","./react":"3Lunc","./tensorflow":"izyqb","./swift":"kmKYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rmrL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linuxRepo", ()=>linuxRepo);
const linuxRepo = {
    label: "Linux Kernel",
    url: "https://github.com/torvalds/linux",
    files: [
        {
            path: "/linux/kernel/futex/core.c",
            code: `
static struct {
	struct futex_hash_bucket *queues;
	unsigned long            hashsize;
} __futex_data __read_mostly __aligned(2*sizeof(long));

#define futex_queues   (__futex_data.queues)
#define futex_hashsize (__futex_data.hashsize)

#ifdef CONFIG_FAIL_FUTEX

static struct {
	struct fault_attr attr;

	bool ignore_private;
} fail_futex = {
	.attr = FAULT_ATTR_INITIALIZER,
	.ignore_private = false,
};

static int __init setup_fail_futex(char *str)
{
	return setup_fault_attr(&fail_futex.attr, str);
}
__setup("fail_futex=", setup_fail_futex);

bool should_fail_futex(bool fshared)
{
	if (fail_futex.ignore_private && !fshared)
		return false;

	return should_fail(&fail_futex.attr, 1);
}

#ifdef CONFIG_FAULT_INJECTION_DEBUG_FS

static int __init fail_futex_debugfs(void)
{
	umode_t mode = S_IFREG | S_IRUSR | S_IWUSR;
	struct dentry *dir;

	dir = fault_create_debugfs_attr("fail_futex", NULL,
					&fail_futex.attr);
	if (IS_ERR(dir))
		return PTR_ERR(dir);

	debugfs_create_bool("ignore-private", mode, dir,
			    &fail_futex.ignore_private);
	return 0;
}`
        },
        {
            path: "/crypto/aegis128-core.c",
            code: `
static void crypto_aegis128_update(struct aegis_state *state)
{
	union aegis_block tmp;
	unsigned int i;

	tmp = state->blocks[AEGIS128_STATE_BLOCKS - 1];
	for (i = AEGIS128_STATE_BLOCKS - 1; i > 0; i--)
		crypto_aegis_aesenc(&state->blocks[i], &state->blocks[i - 1],
				    &state->blocks[i]);
	crypto_aegis_aesenc(&state->blocks[0], &tmp, &state->blocks[0]);
}

static void crypto_aegis128_update_a(struct aegis_state *state,
				     const union aegis_block *msg,
				     bool do_simd)
{
	if (IS_ENABLED(CONFIG_CRYPTO_AEGIS128_SIMD) && do_simd) {
		crypto_aegis128_update_simd(state, msg);
		return;
	}

	crypto_aegis128_update(state);
	crypto_aegis_block_xor(&state->blocks[0], msg);
}

static void crypto_aegis128_update_u(struct aegis_state *state, const void *msg,
				     bool do_simd)
{
	if (IS_ENABLED(CONFIG_CRYPTO_AEGIS128_SIMD) && do_simd) {
		crypto_aegis128_update_simd(state, msg);
		return;
	}

	crypto_aegis128_update(state);
	crypto_xor(state->blocks[0].bytes, msg, AEGIS_BLOCK_SIZE);
}
`
        },
        {
            path: "/drivers/base/bus.c",
            code: `
static struct subsys_private *bus_to_subsys(const struct bus_type *bus)
{
	struct subsys_private *sp = NULL;
	struct kobject *kobj;

	if (!bus || !bus_kset)
		return NULL;

	spin_lock(&bus_kset->list_lock);

	if (list_empty(&bus_kset->list))
		goto done;

	list_for_each_entry(kobj, &bus_kset->list, entry) {
		struct kset *kset = container_of(kobj, struct kset, kobj);

		sp = container_of_const(kset, struct subsys_private, subsys);
		if (sp->bus == bus)
			goto done;
	}
	sp = NULL;
done:
	sp = subsys_get(sp);
	spin_unlock(&bus_kset->list_lock);
	return sp;
}

static struct bus_type *bus_get(struct bus_type *bus)
{
	struct subsys_private *sp = bus_to_subsys(bus);

	if (sp)
		return bus;
	return NULL;
}
`
        },
        {
            path: "/mm/compaction.c",
            code: `
static void split_map_pages(struct list_head *list)
{
	unsigned int i, order, nr_pages;
	struct page *page, *next;
	LIST_HEAD(tmp_list);

	list_for_each_entry_safe(page, next, list, lru) {
		list_del(&page->lru);

		order = page_private(page);
		nr_pages = 1 << order;

		post_alloc_hook(page, order, __GFP_MOVABLE);
		if (order)
			split_page(page, order);

		for (i = 0; i < nr_pages; i++) {
			list_add(&page->lru, &tmp_list);
			page++;
		}
	}

	list_splice(&tmp_list, list);
}

bool PageMovable(struct page *page)
{
	const struct movable_operations *mops;

	VM_BUG_ON_PAGE(!PageLocked(page), page);
	if (!__PageMovable(page))
		return false;

	mops = page_movable_ops(page);
	if (mops)
		return true;

	return false;
}
`
        },
        {
            path: "/sound/firewire/amdtp-stream.c",
            code: `
int amdtp_stream_set_parameters(struct amdtp_stream *s, unsigned int rate,
				unsigned int data_block_quadlets, unsigned int pcm_frame_multiplier)
{
	unsigned int sfc;
	for (sfc = 0; sfc < ARRAY_SIZE(amdtp_rate_table); ++sfc) {
		if (amdtp_rate_table[sfc] == rate)
			break;
	}
	if (sfc == ARRAY_SIZE(amdtp_rate_table))
		return -EINVAL;
	s->sfc = sfc;
	s->data_block_quadlets = data_block_quadlets;
	s->syt_interval = amdtp_syt_intervals[sfc];
	s->transfer_delay = TRANSFER_DELAY_TICKS - TICKS_PER_CYCLE;
	if (s->flags & CIP_BLOCKING)
		s->transfer_delay += TICKS_PER_SECOND * s->syt_interval / rate;

	s->pcm_frame_multiplier = pcm_frame_multiplier;

	return 0;
}
EXPORT_SYMBOL(amdtp_stream_set_parameters);
static int amdtp_stream_get_max_ctx_payload_size(struct amdtp_stream *s)
{
	unsigned int multiplier;
	if (s->flags & CIP_JUMBO_PAYLOAD)
		multiplier = IR_JUMBO_PAYLOAD_MAX_SKIP_CYCLES;
	else
		multiplier = 1;
	return s->syt_interval * s->data_block_quadlets * sizeof(__be32) * multiplier;
}
`
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Lunc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reactRepo", ()=>reactRepo);
const reactRepo = {
    label: "React",
    url: "https://github.com/facebook/react",
    files: [
        {
            path: "/packages/react-dom/src/server/ReactDOMFizzServerBrowser.js",
            code: `
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
            code: `
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
            code: `
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
            code: `
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
            code: `
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
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izyqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tensorFlowRepo", ()=>tensorFlowRepo);
const tensorFlowRepo = {
    label: "TensorFlow",
    url: "https://github.com/tensorflow/tensorflow",
    files: [
        {
            path: "/tensorflow/python/autograph/impl/conversion.py",
            code: `
_ALLOWLIST_CACHE = cache.UnboundInstanceCache()

def _is_of_known_loaded_module(f, module_name):
  mod = sys.modules.get(module_name, None)
  if mod is None:
    return False
  if any(v is not None for v in mod.__dict__.values() if f is v):
    return True
  return False

def _is_known_loaded_type(f, module_name, entity_name):
  if (module_name not in sys.modules or
      not hasattr(sys.modules[module_name], entity_name)):
    return False
  type_entity = getattr(sys.modules[module_name], entity_name)
  if isinstance(f, type_entity):
    return True
  if inspect.ismethod(f):
    if isinstance(f.__func__, type_entity):
      return True
  return False
`
        },
        {
            path: "/tensorflow/python/framework/combinations.py",
            code: `
class EagerGraphCombination(test_combinations.TestCombination):
  """
  The optional \`mode\` parameter controls the test's execution mode.  Its
  accepted values are "graph" or "eager" literals.
  """

  def context_managers(self, kwargs):
    mode = kwargs.pop("mode", None)
    if mode is None:
      return []
    elif mode == "eager":
      return [context.eager_mode()]
    elif mode == "graph":
      return [ops.Graph().as_default(), context.graph_mode()]
    else:
      raise ValueError(
          "Argument 'mode' must be either 'eager' or 'graph'. "
          f"Received: {mode}.")

  def parameter_modifiers(self):
    return [test_combinations.OptionalParameter("mode")]

class TFVersionCombination(test_combinations.TestCombination):
  def should_execute_combination(self, kwargs):
    tf_api_version = kwargs.pop("tf_api_version", None)
    if tf_api_version == 1 and tf2.enabled():
      return (False, "Skipping a TF1.x test when TF2 is enabled.")
    elif tf_api_version == 2 and not tf2.enabled():
      return (False, "Skipping a TF2 test when TF2 is not enabled.")
    return (True, None)
`
        },
        {
            path: "/tensorflow/core/kernels/linalg/determinant_op.cc",
            code: `
namespace tensorflow {
	template <class Scalar>
	static typename Eigen::NumTraits<Scalar>::Real SLogDet(
			const Eigen::Matrix<Scalar, Eigen::Dynamic, Eigen::Dynamic>& inputs,
			Scalar* sign) {
		using RealScalar = typename Eigen::NumTraits<Scalar>::Real;
		RealScalar log_abs_det = 0;
		*sign = 1;
		if (inputs.size() > 0) {
			using Eigen::Dynamic;
			Eigen::PartialPivLU<Eigen::Matrix<Scalar, Dynamic, Dynamic>> lu(inputs);
			Eigen::Matrix<Scalar, Dynamic, Dynamic> LU = lu.matrixLU();
			*sign = lu.permutationP().determinant();
			auto diag = LU.diagonal().array().eval();
			auto abs_diag = diag.cwiseAbs().eval();
			log_abs_det += abs_diag.log().sum();
			*sign *= (diag / abs_diag).prod();
		}
		if (!Eigen::numext::isfinite(log_abs_det)) {
			*sign = 0;
			log_abs_det =
					log_abs_det > 0 ? -std::log(RealScalar(0)) : std::log(RealScalar(0));
		}
		return log_abs_det;
	}
}
`
        },
        {
            path: "/tensorflow/core/grappler/graph_topology_view.cc",
            code: `
template <typename T>
inline void SortAndRemoveDuplicates(T* v) {
  std::sort(v->begin(), v->end());
  v->erase(std::unique(v->begin(), v->end()), v->end());
}

Status GraphTopologyView::InitializeFromGraph(
    const GraphDef& graph,
    const absl::Span<const GraphView::Edge> ephemeral_edges,
    bool ignore_control_edges) {
  if (graph_ != nullptr) {
    return errors::InvalidArgument("GraphTopologyView is already initialized.");
  }

  graph_ = &graph;
  num_nodes_ = graph.node_size();
  index_to_node_name_.resize(num_nodes_);
  node_name_to_index_.rehash(num_nodes_);
  fanins_.resize(num_nodes_);
  fanouts_.resize(num_nodes_);

  for (int node_idx = 0; node_idx < num_nodes_; ++node_idx) {
    const NodeDef& node = graph.node(node_idx);
    node_name_to_index_.emplace(node.name(), node_idx);
    index_to_node_name_.emplace_back(node.name());
  }
`
        },
        {
            path: "/tensorflow/core/common_runtime/gpu/gpu_cudamalloc_allocator.cc",
            code: `
void* GPUcudaMallocAllocator::AllocateRaw(size_t alignment, size_t num_bytes) {
	#ifdef GOOGLE_CUDA
		// allocate with cudaMalloc
		se::cuda::ScopedActivateExecutorContext scoped_activation{stream_exec_};
		CUdeviceptr rv = 0;
		CUresult res = cuMemAlloc(&rv, num_bytes);
		if (res != CUDA_SUCCESS) {
			const char* error_name;
			const char* error_string;
			cuGetErrorName(res, &error_name);
			cuGetErrorString(res, &error_string);
			LOG(ERROR) << "cuMemAlloc failed to allocate " << num_bytes
								 << "\n Error name: " << error_name
								 << "\n Error string: " << error_string;
			return nullptr;
		}
		VLOG(10) << "AllocateRaw " << Name() << "  " << num_bytes << " "
						 << reinterpret_cast<void*>(rv);
		return reinterpret_cast<void*>(rv);
	#else
		return nullptr;
	#endif  // GOOGLE_CUDA
	}
`
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmKYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "swiftRepo", ()=>swiftRepo);
const swiftRepo = {
    label: "Swift",
    url: "https://github.com/twostraws/BioBlitz",
    files: [
        {
            path: "BioBlitz/BacteriaView.swift",
            code: `
import SwiftUI

struct BacteriaView: View {
    var bacteria: Bacteria
    var rotationAction: () -> Void

    var image: String {
        switch bacteria.color {
        case .red:
            return "chevron.up.square.fill"
        case .green:
            return "chevron.up.circle.fill"
        default:
            return "chevron.up.circle"
        }
    }

    var body: some View {
        ZStack {
            Button(action: rotationAction) {
                Image(systemName: image)
                    .resizable()
                    .foregroundColor(bacteria.color)
            }
            .buttonStyle(.plain)
            .frame(width: 32, height: 32)

            Rectangle()
                .fill(bacteria.color)
                .frame(width: 3, height: 8)
                .offset(y: -20)
        }
        .rotationEffect(.degrees(bacteria.direction.rotation))
    }
}

struct BacteriaView_Previews: PreviewProvider {
    static var previews: some View {
        BacteriaView(bacteria: Bacteria(row: 0, col: 0)) {
            
        }
    }
}
            `
        },
        {
            path: "BioBlitz/Bacteria.swift",
            code: `
                import SwiftUI

class Bacteria {
    enum Direction: CaseIterable {
        case north, south, east, west

        var rotation: Double {
            switch self {
            case .north: return 0
            case .south: return 180
            case .east: return 90
            case .west: return 270
            }
        }

        var opposite: Direction {
            switch self {
            case .north: return .south
            case .south: return .north
            case .east: return .west
            case .west: return .east
            }
        }

        var next: Direction {
            switch self {
            case .north: return .east
            case .east: return .south
            case .south: return .west
            case .west: return .north
            }
        }
    }

    var row: Int
    var col: Int

    var color = Color.gray
    var direction = Direction.north

    init(row: Int, col: Int) {
        self.row = row
        self.col = col
    }
}
`
        },
        {
            path: "BioBlitz/GameBoard.swift",
            code: `
                import SwiftUI

                class GameBoard: ObservableObject {
                    let rowCount = 11
                    let columnCount = 22
                
                    @Published var grid = [[Bacteria]]()
                
                    @Published var currentPlayer = Color.green
                    @Published var greenScore = 1
                    @Published var redScore = 1
                
                    @Published var winner: String? = nil
                
                    private var bacteriaBeingInfected = 0
                
                    init() {
                        reset()
                    }
                
                    func reset() {
                        winner = nil
                        currentPlayer = .green
                        redScore = 1
                        greenScore = 1
                
                        grid.removeAll()
                
                        for row in 0..<rowCount {
                            var newRow = [Bacteria]()
                
                            for col in 0..<columnCount {
                                let bacteria = Bacteria(row: row, col: col)
                
                                if row <= rowCount / 2 {
                                    if row == 0 && col == 0 {
                                        // make sure the player starts pointing away from anything
                                        bacteria.direction = .north
                                    } else if row == 0 && col == 1 {
                                        // make sure nothing points to the player
                                        bacteria.direction = .east
                                    } else if row == 1 && col == 0 {
                                        // make sure nothing points to the player
                                        bacteria.direction = .south
                                    } else {
                                        // all other pieces are random
                                        bacteria.direction = Bacteria.Direction.allCases.randomElement()!
                                    }
                                } else {
                                    // mirror the counterpart
                                    if let counterpart = getBacteria(atRow: rowCount - 1 - row, col: columnCount - 1 - col) {
                                        bacteria.direction = counterpart.direction.opposite
                                    }
                                }
                
                                newRow.append(bacteria)
                            }
                
                            grid.append(newRow)
                        }
                
                        grid[0][0].color = .green
                        grid[rowCount - 1][columnCount - 1].color = .red
                    }
                
                    func getBacteria(atRow row: Int, col: Int) -> Bacteria? {
                        guard row >= 0 else { return nil }
                        guard row < grid.count else { return nil }
                        guard col >= 0 else { return nil }
                        guard col < grid[0].count else { return nil }
                        return grid[row][col]
                    }
                
                    func infect(from: Bacteria) {
                        objectWillChange.send()
                
                        var bacteriaToInfect = [Bacteria?]()
                
                        // direct infection
                        switch from.direction {
                        case .north:
                            bacteriaToInfect.append(getBacteria(atRow: from.row - 1, col: from.col))
                        case .south:
                            bacteriaToInfect.append(getBacteria(atRow: from.row + 1, col: from.col))
                        case .east:
                            bacteriaToInfect.append(getBacteria(atRow: from.row, col: from.col + 1))
                        case .west:
                            bacteriaToInfect.append(getBacteria(atRow: from.row, col: from.col - 1))
                        }
                
                        // indirect infection from above
                        if let indirect = getBacteria(atRow: from.row - 1, col: from.col) {
                            if indirect.direction == .south {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from below
                        if let indirect = getBacteria(atRow: from.row + 1, col: from.col) {
                            if indirect.direction == .north {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from left
                        if let indirect = getBacteria(atRow: from.row, col: from.col - 1) {
                            if indirect.direction == .east {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from right
                        if let indirect = getBacteria(atRow: from.row, col: from.col + 1) {
                            if indirect.direction == .west {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        for case let bacteria? in bacteriaToInfect {
                            if bacteria.color != from.color {
                                bacteria.color = from.color
                                bacteriaBeingInfected += 1
                
                                Task { @MainActor in
                                    try await Task.sleep(nanoseconds: 50_000_000)
                                    bacteriaBeingInfected -= 1
                                    infect(from: bacteria)
                                }
                            }
                        }
                
                        updateScores()
                    }
                
                    func rotate(bacteria: Bacteria) {
                        guard bacteria.color == currentPlayer else { return }
                        guard bacteriaBeingInfected == 0 else { return }
                        guard winner == nil else { return }
                
                        objectWillChange.send()
                
                        bacteria.direction = bacteria.direction.next
                
                        infect(from: bacteria)
                    }
                
                    func changePlayer() {
                        if currentPlayer == .green {
                            currentPlayer = .red
                        } else {
                            currentPlayer = .green
                        }
                    }
                
                    func updateScores() {
                        var newRedScore = 0
                        var newGreenScore = 0
                
                        for row in grid {
                            for bacteria in row {
                                if bacteria.color == .red {
                                    newRedScore += 1
                                } else if bacteria.color == .green {
                                    newGreenScore += 1
                                }
                            }
                        }
                
                        redScore = newRedScore
                        greenScore = newGreenScore
                
                        if bacteriaBeingInfected == 0 {
                            withAnimation(.spring()) {
                                if redScore == 0 {
                                    winner = "Green"
                                } else if greenScore == 0 {
                                    winner = "Red"
                                } else {
                                    changePlayer()
                                }
                            }
                        }
                    }
                }
`
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aHsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startEditor", ()=>startEditor);
parcelHelpers.export(exports, "clearEditor", ()=>clearEditor);
var _keyboard = require("./keyboard");
var _terminal = require("./terminal");
const editorElement = document.getElementById("editor");
const statsElement = document.getElementById("stats");
const linesPerPage = 3;
const typingTime = 45000;
const cursorClassName = "cursor";
const nextClassName = "next";
const wrongClassName = "wrong";
const whitespaceRegex = /\s/;
const printCode = (lines)=>{
    editorElement.innerHTML = "";
    let index = 0;
    for (const line of lines){
        for (const character of line){
            const span = document.createElement("span");
            span.innerText = character;
            if (index > 0) span.classList.add("next");
            if (whitespaceRegex.test(character)) span.setAttribute("data-whitespace", "true");
            editorElement.appendChild(span);
            index++;
        }
        editorElement.appendChild(document.createElement("br"));
    }
    const firstElement = editorElement.firstChild;
    firstElement.classList.add(cursorClassName);
    return firstElement;
};
const printStats = (result)=>{
    const secondsLeft = ((typingTime - result.totalTime) / 1000).toFixed(0);
    statsElement.innerHTML = [
        "",
        (0, _terminal.separatorLine),
        `Time left: ${secondsLeft} seconds`,
        `Characters typed: ${result.totalCharacters}`,
        `Errors: ${result.totalCharacters - result.correctCharacters}`
    ].join("<br/>");
};
const normalizeCode = (code)=>{
    return code.trim().replace(/\t/g, "  ");
};
const startEditor = (code)=>{
    code = normalizeCode(code);
    return new Promise(async (resolve)=>{
        const allLines = code.split(/[ \t]*\r?\n/).filter((l)=>l.trim().length > 0).map((l)=>l + " ");
        let firstLineIndex = 0;
        let charIndex = 0;
        let lineIndex = 0;
        let totalCharacters = 0;
        let correctCharacters = 0;
        let pageLines = allLines.slice(firstLineIndex, linesPerPage);
        let line = pageLines[lineIndex];
        let element = printCode(pageLines);
        let startTime = 0;
        let timeoutHandle = 0;
        let statsIntervalHandle = 0;
        let lineCorrectness = [];
        const advanceCharacter = (isCorrect)=>{
            element.classList.remove(cursorClassName);
            if (!isCorrect) element.classList.add(wrongClassName);
            element = element.nextElementSibling;
            element.classList.remove(nextClassName);
            element.classList.add(cursorClassName);
            lineCorrectness.push(isCorrect);
            charIndex++;
        };
        const applyBackspace = ()=>{
            element.classList.remove(cursorClassName);
            element.classList.add(nextClassName);
            element = element.previousElementSibling;
            element.classList.remove(wrongClassName);
            element.classList.add(cursorClassName);
            charIndex--;
            if (lineCorrectness[charIndex]) correctCharacters--;
            lineCorrectness = lineCorrectness.slice(0, -1);
        };
        const advanceLine = ()=>{
            line = pageLines[++lineIndex];
            charIndex = 0;
            lineCorrectness = [];
            element.classList.remove(cursorClassName);
            element = element.nextElementSibling?.nextElementSibling;
            element.classList.remove(nextClassName);
            element.classList.add(cursorClassName);
            advanceWhitespace();
        };
        const advancePage = ()=>{
            firstLineIndex += pageLines.length;
            pageLines = allLines.slice(firstLineIndex, firstLineIndex + linesPerPage);
            lineIndex = 0;
            charIndex = 0;
            line = pageLines[lineIndex];
            element = printCode(pageLines);
            advanceWhitespace();
        };
        const advanceWhitespace = ()=>{
            let count = 0;
            while(charIndex + count < line.length - 1 && whitespaceRegex.test(line[charIndex + count]))advanceCharacter(true);
        };
        const getResult = ()=>{
            const now = new Date().valueOf();
            const totalTime = now - startTime;
            return {
                correctCharacters,
                totalCharacters,
                totalTime,
                reachedTheEnd: totalTime <= typingTime
            };
        };
        const endTyping = ()=>{
            document.removeEventListener("keydown", listener);
            clearTimeout(timeoutHandle);
            clearInterval(statsIntervalHandle);
            resolve(getResult());
        };
        const beginTyping = ()=>{
            startTime = new Date().valueOf();
            timeoutHandle = setTimeout(endTyping, typingTime);
            statsIntervalHandle = setInterval(()=>printStats(getResult()), 1000);
        };
        const processKey = (key)=>{
            if (key.length === 1 && charIndex < line.length - 1) {
                if (startTime === 0) beginTyping();
                const isCorrect = key === line[charIndex];
                advanceCharacter(isCorrect);
                correctCharacters += isCorrect ? 1 : 0;
                totalCharacters++;
                if (charIndex === line.length - 1 && lineIndex === pageLines.length - 1) {
                    if (firstLineIndex < allLines.length - 1) advancePage();
                    else endTyping();
                }
            } else if (charIndex > 0 && key === (0, _keyboard.backspaceKey)) applyBackspace();
            else if (charIndex === line.length - 1 && key === (0, _keyboard.enterKey)) {
                totalCharacters++;
                correctCharacters++;
                if (lineIndex < pageLines.length - 1) advanceLine();
            } else return;
            printStats(getResult());
        };
        const listener = (event)=>{
            const key = event.key;
            if (key === (0, _keyboard.tabKey)) {
                processKey(" ");
                processKey(" ");
                event.preventDefault();
                event.stopPropagation();
            } else processKey(key);
        };
        document.addEventListener("keydown", listener);
    });
};
const clearEditor = ()=>{
    editorElement.innerHTML = "";
    statsElement.innerHTML = "";
};

},{"./keyboard":"iVx8O","./terminal":"j00NU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVx8O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enterKey", ()=>enterKey);
parcelHelpers.export(exports, "backspaceKey", ()=>backspaceKey);
parcelHelpers.export(exports, "tabKey", ()=>tabKey);
const enterKey = "Enter";
const backspaceKey = "Backspace";
const tabKey = "Tab";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j00NU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "separatorLine", ()=>separatorLine);
parcelHelpers.export(exports, "addTerminalCursor", ()=>addTerminalCursor);
parcelHelpers.export(exports, "removeTerminalCursor", ()=>removeTerminalCursor);
parcelHelpers.export(exports, "writeLines", ()=>writeLines);
parcelHelpers.export(exports, "readLine", ()=>readLine);
parcelHelpers.export(exports, "chooseOption", ()=>chooseOption);
parcelHelpers.export(exports, "clearTerminal", ()=>clearTerminal);
var _keyboard = require("./keyboard");
const terminalElement = document.getElementById("terminal");
const cursorElement = document.getElementById("cursor");
const separatorLine = "------------------------------------------------";
const promptPrefix = "$ ";
const typingDelay = 20;
const addTerminalCursor = ()=>{
    if (cursorElement.parentElement !== terminalElement) terminalElement.appendChild(cursorElement);
};
const removeTerminalCursor = ()=>{
    if (cursorElement.parentElement === terminalElement) terminalElement.removeChild(cursorElement);
};
const writeLines = async (lines)=>{
    removeTerminalCursor();
    for (const line of lines){
        await writeSingleLine(line);
        writeLineBreak();
    }
    terminalElement.appendChild(cursorElement);
};
const writeSingleLine = (line)=>{
    return new Promise((resolve)=>{
        let index = 0;
        const interval = setInterval(()=>{
            writeChar(line[index++]);
            if (index === line.length) {
                clearInterval(interval);
                resolve();
            }
        }, typingDelay);
    });
};
const writeChar = (char)=>{
    const span = document.createElement("span");
    span.textContent = char;
    terminalElement.appendChild(span);
    terminalElement.appendChild(cursorElement);
    terminalElement.scrollTop = terminalElement.scrollHeight;
};
const removeLastChar = ()=>{
    terminalElement.removeChild(cursorElement);
    const last = terminalElement.lastChild;
    if (last) terminalElement.removeChild(last);
    terminalElement.appendChild(cursorElement);
};
const writeLineBreak = ()=>{
    terminalElement.appendChild(document.createElement("br"));
};
const inputRegex = /^[\w\d ]$/;
const readLine = ()=>{
    return new Promise((resolve)=>{
        let line = "";
        const listener = (event)=>{
            const key = event.key;
            if (inputRegex.test(key)) {
                line += key;
                writeChar(key);
            } else if (key === (0, _keyboard.enterKey) && line.length > 0) {
                document.removeEventListener("keydown", listener);
                writeLineBreak();
                resolve(line);
            } else if (key === (0, _keyboard.backspaceKey) && line.length > 0) {
                event.preventDefault();
                line = line.slice(0, line.length - 1);
                removeLastChar();
            }
        };
        writeSingleLine(promptPrefix);
        document.addEventListener("keydown", listener);
    });
};
const chooseOptionErrorMessages = [
    [
        "Just enter a",
        "Don't be silly :)"
    ],
    [
        "A",
        "I mean it this time."
    ],
    [
        "Ok, you've had your fun... Simply enter a",
        "This is important!"
    ],
    [
        "What does that even mean? Please, a",
        "I thought we were past this..."
    ],
    [
        "Ok, wow... Do me a favor here with a",
        "It's getting embarrassing now, really."
    ],
    [
        "Let me check... Nope, that's not a",
        "Let's not play these games anymore, hm?"
    ]
];
const chooseOption = async (options)=>{
    await writeLines([
        ...options.map((opt, index)=>`${index + 1}. ${opt.label}`),
        " "
    ]);
    let tryIndex = 0;
    let index = -1;
    while(index === -1){
        const number = parseInt(await readLine());
        if (number > 0 && number <= options.length) index = number - 1;
        else {
            const errorMessage = chooseOptionErrorMessages[tryIndex++];
            tryIndex = tryIndex % chooseOptionErrorMessages.length;
            await writeLines([
                " ",
                `${errorMessage[0]} number between 1 and ${options.length}.`,
                errorMessage[1],
                " "
            ]);
        }
    }
    return options[index];
};
const clearTerminal = ()=>{
    terminalElement.innerHTML = "";
};

},{"./keyboard":"iVx8O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gdfbb","5Mosj"], "5Mosj", "parcelRequire74cc")

//# sourceMappingURL=index.eee30da0.js.map
