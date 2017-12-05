
const config = require('../webpack.config.js')(process.env);

module.exports = (config) => {
  // Extend it as you need.

  // For example, add css and style loaders:
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });
  config.resolve.extensions.push('.css');

  return config;
};