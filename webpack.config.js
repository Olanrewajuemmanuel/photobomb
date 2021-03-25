const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{test: /\.js/, use: 'babel-loader', exclude: '/node_modules/'}]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [new CleanWebpackPlugin()]
}