/**
 * generates:
 *  - dist/main.js
 *  - dist/manifest.json
 *  - dist/webpack-bundle-analyzer-report.html
 */
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const remoteComponentConfig = require("./remote-component.config").resolve;

const externals = Object.keys(remoteComponentConfig).reduce(
  (obj, key) => ({ ...obj, [key]: key }),
  {}
);

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const componentName = process.env.COMPONENT_NAME;

// Delete all files in bundle folder
const directory = "./bundle";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});

let entries = {};

// Generate entry list according to the component
if (!componentName) {
  const dir = "./src/components";

  fs.readdirSync(dir).forEach(file => {
    if (path.extname(file) === ".js") {
      const name = path.basename(file, ".js");
      entries[name] = `./${path.join(dir, file).replace(/\\/g, "/")}`;
    }
  });
} else {
  entries = {
    [componentName]: `./src/components/${capitalizeFirstLetter(componentName)}.js`
  };
}

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "webpack-bundle-analyzer-report.html"
    }),
    new WebpackAssetsManifest(),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ["cp ./dist/*.bundle.js ./bundle/"],
        blocking: false,
        parallel: true
      }
    })
  ],
  entry: {
    main: "./src/index.js",
    ...entries
  },
  output: {
    libraryTarget: "commonjs",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    ...externals,
    "remote-component.config.js": "remote-component.config.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
