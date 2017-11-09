'use strict'

const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

//Type definitions
const typeDefs = `
  type Campus {
    id: ID!
    name: String!
    imgURL: String
    description: String
    students: [Student]!
  }

  type Student {
    id: ID!
    name: String!
    email: String!
    assignedCampus: Campus!
  }

  type Query {
    allCampuses: [Campus!]!
  }

  type Mutation {
    createCampus(name: String!, imgURL: String, description: String): Campus
  }
`;

//Generate Schema object from the types definitons and resolvers
module.exports = makeExecutableSchema({typeDefs, resolvers});
