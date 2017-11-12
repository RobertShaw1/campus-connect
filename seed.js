const db = require('./server/db/db');
const Student = require('./server/db/models/student');
const Campus = require('./server/db/models/campus');
const Promise = require('bluebird');

const campuses = [
  {
    name: 'GraphQL',
    imgURL: 'http://graphql.org/',
    description: 'The Best Query Language',
  },
  {
    name: 'Apollo',
    imgURL: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client',
  },
  {
    name: 'Mercury',
    imgURL: 'https://apod.nasa.gov/apod/image/1303/PIA16853mercury.jpg',
    description: 'Closest to the sun',
  },
];


const id = () => Math.round(Math.random() * (campuses.length - 1));
// const id = () => 0;

const students = [{
  name: 'Cody',
  email: 'cody@cody.com',
  assignedCampus: campuses[id()].name
}, {
  name: 'Ben',
  email: 'ben@ben.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Star',
  email: 'star@star.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Batman',
  email: 'batman@batman.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Elliott',
  email: 'elliot@elliot.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Fira',
  email: 'fira@fira.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Henry',
  email: 'henry@henry.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Marcy',
  email: 'marcy@marcy.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Milton',
  email: 'milton@milton.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Murphy',
  email: 'murphy@murphy.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Raffi',
  email: 'raffi@raffi.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Tulsi',
  email: 'tulsi@tulsi.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Pork Chop',
  email: 'porkchop@porkchop.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Ribs',
  email: 'ribs@ribs.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Stacey',
  email: 'stacey@stacey.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'JD',
  email: 'jd@jd.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Slim',
  email: 'slim@slim.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Yoda',
  email: 'yoda@yoda.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Mark',
  email: 'mark@mark.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Larry',
  email: 'larry@larry.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Lisa',
  email: 'lisa@lisa.com',
  assignedCampus: campuses[id()].name,
}, {
  name: 'Odie',
  email: 'odie@odie.com',
  assignedCampus: campuses[id()].name,
}];


const seed = () => (
  Promise.all(campuses.map(campus => {
    console.log(campus)
    return Campus.create(campus)
  }))
  .then(() =>
    Promise.all(students.map(student => {
      console.log(student)
      return Student.create(student)
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
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
