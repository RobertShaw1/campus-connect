'use strict'

const express = require('express');

// This package automagically parses JSON requests
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');


const schema = require('./schema');

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: 'graphql',
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`GraphQL server running on PORT ${PORT}!`)
});

