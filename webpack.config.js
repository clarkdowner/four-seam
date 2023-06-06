const path = require("path");
const webpack = require("webpack")

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: NODE_ENV,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
