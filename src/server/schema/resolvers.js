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
  Campus: {
    students: ({name}) => Student.findAll({
      where: {
        assignedCampus: name,
      }
    })
  },
  Mutation: {
    createCampus: (_, data) => {
      return Campus.create({...data})
        .then(newCampus => newCampus)
    },
    createStudent: (_, data) => {
      // TODO: although we'll be able to control the user input from the GUI for the assignedCampus
      // we need our server to throw an error if the student's assignedCampus does not exist
      return Student.create({...data})
        .then(newStudent => newStudent)
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
