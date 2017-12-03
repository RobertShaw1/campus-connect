'use strict'
const path = require('path');

// This package automagically parses JSON requests
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const express = require('express');
const app = express();
const schema = require('./schema');

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: 'graphql',
}));

const PUBLIC_DIR = path.resolve(__dirname, '../../public');

app.use(express.static(PUBLIC_DIR));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`GraphQL server running on PORT ${PORT}!`)
});

