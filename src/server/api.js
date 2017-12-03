'use strict'

// This package automagically parses JSON requests
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const api = require('express')();
const schema = require('./schema');

api.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

api.use('/graphiql', graphiqlExpress({
  endpointURL: 'graphql',
}));

module.exports = api;
