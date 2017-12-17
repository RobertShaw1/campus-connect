// NODE Modules
const Promise = require('bluebird');
const chance = require('chance')();

// LOCAL Modules
const db = require('./src/server/db/db');
const {Campus, Student} = require('./src/server/db/models');
const students = require('./students');

const campuses = [
  {
    name: 'GraphQL',
    imgURL: 'http://graphql.org/img/logo.svg',
    description: 'The Best Query Language',
  },
  {
    name: 'Apollo',
    imgURL: 'http://www.discovermeteor.com/images/blog/apollo-logo.png',
    description: 'Awesome GraphQL Client',
  },
  {
    name: 'Mercury',
    imgURL: 'https://apod.nasa.gov/apod/image/1303/PIA16853mercury.jpg',
    description: 'Closest to the sun',
  },
];

const createRandomCampusId = () => Math.ceil(Math.random() * (campuses.length));

students.forEach(student => student.phone = chance.phone());

const seed = () => (
  Promise.all(campuses.map(campus => {
    console.log(campus)
    return Campus.create(campus)
  }))
  .then(() =>
    Promise.all(students.map(student => {
      console.log(student)
      return (
        Student.create(student)
        .then(student => {
          student.setCampus(createRandomCampusId());
        })
      )
    }))
  )
)

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log(`
      \n*************************\n!!!ERROR WHILE SEEDING!!!\n*************************
      `);
      console.error(err.stack, '\n');
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
