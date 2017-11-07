'use strict'

const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

//Type definitions go here
const typeDefs = `
  type Campus {
    id: ID!
    name: String!
    imgURL: String
    description: String
  }

  type Query {
    allCampuses: [Campus!]!
  }
`;

//Generate Schema object from the types definitons and resolvers
module.exports = makeExecutableSchema({typeDefs, resolvers});
