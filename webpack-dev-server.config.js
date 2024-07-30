const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");

module.exports = {
  mode: 'development', // Add mode
  entry: "./src/webpack-dev-server.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    ...config[0].plugins,
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: config[0].module,
  optimization: {
    moduleIds: 'named'
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'), // Update for Webpack 5
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    port: 9090, // Specify port
    open: true // Open browser automatically
  },
  resolve: {
    alias: {
      "remote-component.config.js": path.resolve(__dirname, "remote-component.config.js")
    }
  }
};
