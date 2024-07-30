const webpackMainConfig = require("./webpack-main.config");
const webpackDemoConfig = require("./webpack-demo.config");
const { override } = require("./config-overrides");

module.exports = [override(webpackMainConfig), override(webpackDemoConfig)];
