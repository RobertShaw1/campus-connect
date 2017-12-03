'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src/client'),
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/client'),
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  context: __dirname,
};
