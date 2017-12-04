'use strict'
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../../webpack.config.js')(process.env);
const compiler = webpack(config);

/*
 Tell express to use the webpack-dev-middleware and use the webpack.config.js file as a base.
 */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const PORT = 3000;

app.use('/', require('./api'));
app.use(express.static(PUBLIC_DIR));


app.listen(PORT, () => {
  console.log(`GraphQL server running on PORT ${PORT}!`)
});
