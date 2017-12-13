import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://localhost:3000/graphql');


export const allCampusesQuery = `{
  allCampuses {
    id
    name
    imgURL
    description
  }
}`
