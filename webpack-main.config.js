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
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  if (files.length === 0) {
    console.log("No files to delete.");
    return;
  }

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) {
        console.error(`Error deleting file: ${err.message}`);
      }
    });
  }
  console.log("All files deleted successfully.");
});

let entries = {};

const dir = "./src/components";
// Generate entry list according to the component
if (!componentName) {
  fs.readdirSync(dir).forEach(subdir => {
    const subdirPath = path.join(dir, subdir);

    if (fs.statSync(subdirPath).isDirectory()) {
      const files = fs.readdirSync(subdirPath);
      files.forEach(file => {
        if (path.extname(file) === ".tsx") {
          const name = path.basename(file, ".tsx");
          entries[name] =
            `./${path.join(subdirPath, file).replace(/\\/g, "/")}`;
        }
      });
    }
  });
} else {
  entries = {
    [componentName]: `./src/components/${capitalizeFirstLetter(componentName)}.tsx`
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
        blocking: true,
        parallel: false
      }
    })
  ],
  entry: {
    main: "./src/index.tsx",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
