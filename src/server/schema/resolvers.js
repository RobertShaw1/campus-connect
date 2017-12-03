const {Campus, Student} = require('../db/models');

const campuses = Campus.findAll();
const students = Student.findAll({
  include: [Campus]
}).then(allStudents => allStudents);

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
    createStudent: (_, data) => {
      const {name, email, assignedCampus} = data;
      // TODO: although we'll be able to control the user input from the GUI for the assignedCampus
      // we need our server to throw an error if the student's assignedCampus does not exist
      Campus.findOne({
        where: {name: assignedCampus}
      })
      .then(campus => {
        return Student.create({name, email})
          .then(newStudent => newStudent.setCampus(campus))
      })
    },
    deleteStudent: (_, {id}) => {
      return Student.findById(id)
      .then(student => {
        let deletedStudent = student;
        student.destroy();
        return deletedStudent;
      })
    }
  },
};
