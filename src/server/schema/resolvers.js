const {Campus, Student} = require('../db/models');

const campuses = Campus.findAll().map(foundCampus => {
  return Campus.findAndCountAll({
    where: {id: foundCampus.id},
    include: [Student],
  })
  .then(fetchedCampus => {
    return {
      totalStudents: fetchedCampus.count,
      ...fetchedCampus.rows[0].dataValues,
    }
  })
})

const students = Student.findAll({
  include: [Campus]
}).then(allStudents => allStudents);

module.exports = {
  Query: {
    allCampuses: () => campuses,
    allStudents: () => students,
    singleStudent: (_, {id}) => Student.findById(id),
    singleCampus: (_, {id}) => Campus.findAndCountAll({
      where: {id},
      include: [Student],
    })
    .then(campus => {
      return {totalStudents: campus.count, ...campus.rows[0].dataValues}
    })
  },
  Mutation: {
    createCampus: (_, data) => {
      return Campus.create({...data})
        .then(newCampus => newCampus)
    },
    createStudent: (_, data) => {
      const {assignedCampus} = data;
      // TODO: although we'll be able to control the user input from the GUI for the assignedCampus
      // we need our server to throw an error if the student's assignedCampus does not exist
      Campus.findOne({
        where: {name: assignedCampus}
      })
      .then(campus => {
        const studentData = data;
        delete studentData.assignedCampus;
        return Student.create(studentData)
          .then(newStudent => newStudent.setCampus(campus))
      })
    },
    updateStudent: (_, data) => {
      const {id} = data;
      return Student.findById(id)
      .then(student => student.update(data))
    },
    updateCampus: (_, data) => {
      const {id} = data;
      return Campus.findById(id)
      .then(campus => campus.update(data))
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
