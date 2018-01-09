const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    babel: 'babel-polyfill',
    loader: 'react-hot-loader/patch',
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/sample.html' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true
  }
};
