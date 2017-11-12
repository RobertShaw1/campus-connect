const {Campus, Student} = require('../db/models');

const campuses = Campus.findAll();
const students = Student.findAll();

module.exports = {
  Query: {
    allCampuses: () => campuses,
    allStudents: () => students,
  },
  Mutation: {
    createCampus: (_, data) => {
      Campus.create({...data})
        .then(newCampus => newCampus)
    },
  },
};
