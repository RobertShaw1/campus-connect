'use strict'
const path = require('path');
const express = require('express');
const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const PORT = 3000;

app.use('/', require('./api'));
app.use(express.static(PUBLIC_DIR));


app.listen(PORT, () => {
  console.log(`GraphQL server running on PORT ${PORT}!`)
});

