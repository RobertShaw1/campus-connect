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
    phone: String
    imgURL: String
    campus: Campus
  }

  type Query {
    allCampuses: [Campus!]!
    allStudents: [Student!]!
    singleStudent(id: Int!): Student!
    singleCampus(id: Int!): Campus!
  }

  type Mutation {
    createCampus(
      name: String!,
      imgURL: String,
      description: String,
    ): Campus!
    createStudent(
      name: String!,
      email: String!,
      phone: String,
      imgURL: String,
      assignedCampus: String!,
    ): Student
    deleteStudent(
      id: Int!
    ): Student!
  }
`;

//Generate Schema object from the types definitons and resolvers
module.exports = makeExecutableSchema({typeDefs, resolvers});
