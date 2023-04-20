"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minifySvg;
var _helpers = require("../helpers");
const svgo = (0, _helpers.optionalRequire)('svgo');

/** Minify SVG with SVGO */
function minifySvg(tree, options, svgoOptions = {}) {
  if (!svgo) return tree;
  tree.match({
    tag: 'svg'
  }, node => {
    let svgStr = tree.render(node, {
      closingSingleTag: 'slash',
      quoteAllAttributes: true
    });
    try {
      const result = svgo.optimize(svgStr, svgoOptions);
      node.tag = false;
      node.attrs = {};
      // result.data is a string, we need to cast it to an array
      node.content = [result.data];
      return node;
    } catch (error) {
      console.error('htmlnano fails to minify the svg:');
      console.error(error);
      if (error.name === 'SvgoParserError') {
        console.error(error.toString());
      }
      // We return the node as-is
      return node;
    }
  });
  return tree;
}