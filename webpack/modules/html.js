const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (arr, dirWithPages) => arr.map((item) => new HtmlWebpackPlugin({
  filename: `${item}.html`,
  chunks: [item],
  template: `${dirWithPages}/${item}/${item}.pug`,
  minify: true,
}));
