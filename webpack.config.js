const webpack = require("webpack");
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
    ],
  },
  plugins:[
    new webpack.EnvironmentPlugin({
      PORT:"8081",
      HOST:"localhost"
    })
  ]
};
