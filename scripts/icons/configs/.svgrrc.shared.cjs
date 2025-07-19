module.exports = {
  silent: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['svg'],
            attributes: ['size', 'color', 'variant'],
          },
        ],
      ],
    },
  },
  icon: false,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  typescript: false,
  outDir: 'out/accent',
  expandProps: false,
  prettier: true,
  filenameCase: 'pascal',
  jsxRuntime: 'automatic',
  indexTemplate: require('../template/importer.cjs'),
};
