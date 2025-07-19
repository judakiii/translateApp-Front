const shared = require('./.svgrrc.shared.cjs');

module.exports = {
  ...shared,
  outDir: 'src/assets/icons/fill',
  replaceAttrValues: {
    '#fff': 'currentColor',
  },
};
