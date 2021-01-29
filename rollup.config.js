/* eslint-env node */
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
  external: 'lit-html',
  input: './icons/index.js',
  output: {
    file: './vaadin-icons-bundle.js',
    format: 'esm'
  },
  plugins: [nodeResolve()]
};
