const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.jsx?/, use: "babel-loader", exclude: "/node_modules/" },
            {test: /\.s?css/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']}
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
    new HtmlWebpackPlugin({template: './src/template.html', filename: './public/index.html'}),
    new MiniCssExtractPlugin()
  ],
};
