const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const portFinderSync = require('portfinder-sync')
const ip = require('internal-ip')

module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    host: "0.0.0.0",
    port: portFinderSync.getPort(8080),
    contentBase: "./dist",
    watchContentBase: true,
    open: true,
    https: false,
    useLocalIp: true,
    disableHostCheck: true,
    overlay: true,
    noInfo: true,
    after: function (app, server, compiler) {
      const port = server.options.port;
      const https = server.options.https ? "s" : "";
      const localIp = ip.v4.sync();
      const domain1 = `http${https}://${localIp}:${port}`;
      const domain2 = `http${https}://localhost:${port}`;

      console.log(
        `Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(
          domain2
        )}`
      );
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s?css/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|svg|png)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
