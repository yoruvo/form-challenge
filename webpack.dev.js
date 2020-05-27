const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.config")

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
})
