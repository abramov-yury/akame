const CopyPlugin = require("copy-webpack-plugin");

module.exports = (pathFrom, pathTo) => new CopyPlugin({
  patterns: [
    {
      from: `${pathFrom}/assets/manifest.json`,
      to: `${pathTo}`,
      toType: "dir",
    },
    {
      from: `${pathFrom}/assets/img/`,
      to: `${pathTo}/img`,
      toType: "dir",
    },
  ],
});
