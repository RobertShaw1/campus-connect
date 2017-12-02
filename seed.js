// NODE Modules
const Promise = require('bluebird');

// LOCAL Modules
const db = require('./src/server/db/db');
const Student = require('./src/server/db/models/student');
const Campus = require('./src/server/db/models/campus');

// Create associations
Student.belongsTo(Campus);
Campus.hasMany(Student);

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

const createRandomCampusId = () => Math.ceil(Math.random() * (campuses.length));

const students = [{
  name: 'Cody',
  email: 'cody@cody.com',
}, {
  name: 'Ben',
  email: 'ben@ben.com',
}, {
  name: 'Star',
  email: 'star@star.com',
}, {
  name: 'Batman',
  email: 'batman@batman.com',
}, {
  name: 'Elliott',
  email: 'elliot@elliot.com',
}, {
  name: 'Fira',
  email: 'fira@fira.com',
}, {
  name: 'Henry',
  email: 'henry@henry.com',
}, {
  name: 'Marcy',
  email: 'marcy@marcy.com',
}, {
  name: 'Milton',
  email: 'milton@milton.com',
}, {
  name: 'Murphy',
  email: 'murphy@murphy.com',
}, {
  name: 'Raffi',
  email: 'raffi@raffi.com',
}, {
  name: 'Tulsi',
  email: 'tulsi@tulsi.com',
}, {
  name: 'Pork Chop',
  email: 'porkchop@porkchop.com',
}, {
  name: 'Ribs',
  email: 'ribs@ribs.com',
}, {
  name: 'Stacey',
  email: 'stacey@stacey.com',
}, {
  name: 'JD',
  email: 'jd@jd.com',
}, {
  name: 'Slim',
  email: 'slim@slim.com',
}, {
  name: 'Yoda',
  email: 'yoda@yoda.com',
}, {
  name: 'Mark',
  email: 'mark@mark.com',
}, {
  name: 'Larry',
  email: 'larry@larry.com',
}, {
  name: 'Lisa',
  email: 'lisa@lisa.com',
}, {
  name: 'Odie',
  email: 'odie@odie.com',
}];


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
