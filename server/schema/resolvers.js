const campuses = [
  {
    id: 1,
    name: 'GraphQL',
    imgURL: 'http://graphql.org/',
    description: 'The Best Query Language',
  },
  {
    id: 2,
    name: 'Apollo',
    imgURL: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client',
  },
];

module.exports = {
  Query: {
    allCampuses: () => campuses,
  },
};
