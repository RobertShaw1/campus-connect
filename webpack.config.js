'use strict';
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
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
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/client'),
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  context: __dirname,
};
