const shared = require("./.svgrrc.shared.cjs");

module.exports = {
  ...shared,
  outDir: "src/assets/icons/outline",
  replaceAttrValues: {
    "#fff": "currentColor",
  },
};
