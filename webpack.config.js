'use strict';
const path = require('path');
const webpack = require('webpack');

const CLIENT_DIR = path.resolve(__dirname, 'src/client');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: [
    './src/client/index.js',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: PUBLIC_DIR,
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: CLIENT_DIR,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  context: __dirname,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
};
