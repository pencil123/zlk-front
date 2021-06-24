const { override, addWebpackAlias , addLessLoader,fixBabelImports } = require('customize-cra');
const path = require('path');

module.exports = override(
      // 路径别名
    addWebpackAlias({
        "@": path.resolve(__dirname,"src")
    }),
    // antd按需加载 - babel-plugin-import
  fixBabelImports("import", {
    libraryName: 'antd',
    libraryDirectory: "es",
    style: true,
  }),

    // 修改Less 中的变量
  addLessLoader({
    javascriptEnabled: true,
     strictMath: false,
    noIeCompat: true,
    modifyVars: {
      "@primary-color":"#ff4d4f",
      "@layout-header-background":"#f5f5f5",
    },
    cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
    cssModules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
  }),
)