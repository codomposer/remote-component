const webpackDevConfig = require("./webpack-dev-server.config");
const { override } = require("./config-overrides");

module.exports = [override(webpackDevConfig)];
