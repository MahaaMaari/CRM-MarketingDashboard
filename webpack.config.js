const { use } = require("react");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/UI/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test:/\.(sa|sc|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({filename:"style.css"})
  ]
};
