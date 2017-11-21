'use strict';
const LiveReloadPlugin = require('webpack-livereload-plugin');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client/app',
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
      options: {
        presets: ['env'],
      }
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/client'),
    ],
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  context: __dirname,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      // (the commons chunk name)
    
      filename: 'commons.js',
      // (the filename of the commons chunk)
    
      minChunks: 3,
      // (Modules must be shared between 3 entries)
    }),
    isDev && [new LiveReloadPlugin({appendScriptTag: true})]
    // When we're in development, we can use this handy live-reload plugin
    // to refresh the page for us every time we make a change to our client-side
    // files. It's like `nodemon` for the front end!
  ],
};
