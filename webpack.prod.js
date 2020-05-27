const merge = require("webpack-merge")
const common = require("./webpack.config")

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    publicPath: process.env.GITHUB_ACTIONS ? "/form-challenge" : "/",
  },
})
