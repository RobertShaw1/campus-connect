const {Campus, Student} = require('../db/models');

const campuses = Campus.findAll();
const students = Student.findAll();

module.exports = {
  Query: {
    allCampuses: () => campuses,
    allStudents: () => students,
    singleStudent: (_, {id}) => Student.findById(id),
    singleCampus: (_, {id}) => Campus.findById(id),
  },
  Mutation: {
    createCampus: (_, data) => {
      return Campus.create({...data})
        .then(newCampus => newCampus)
    },
  },
};
