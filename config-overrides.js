const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require('path');

module.exports = override(
  fixBabelImports("import", {
    libraryName: 'antd',
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    'utils': path.resolve(__dirname, 'src/utils'),
    'components': path.resolve(__dirname, 'src/components'),
    'store': path.resolve(__dirname, 'src/store'),
    'static': path.resolve(__dirname, 'src/static')
  })
);
