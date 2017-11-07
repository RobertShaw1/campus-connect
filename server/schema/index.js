'use strict'

const {makeExecutableSchema} = require('graphql-tools');

//Type definitions go here
const typeDefs = `
  type Campus {
    id: ID!
    name: String!
    imgURL: String
    description: String
  }
`;

//Generate Schema object from the types definitons and resolvers
module.exports = makeExecutableSchema({typeDefs});
