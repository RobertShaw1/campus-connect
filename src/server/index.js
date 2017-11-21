'use strict'

// This package automagically parses JSON requests
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const app = require('express')();
const schema = require('./schema');

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: 'graphql',
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`GraphQL server running on PORT ${PORT}!`)
});

