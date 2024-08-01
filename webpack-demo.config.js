const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  entry: {
    demo: "./src/webpack-dev-server.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "remote-component.config.js": path.resolve("./remote-component.config.js")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
};
