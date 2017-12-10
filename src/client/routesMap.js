import { redirect, NOT_FOUND } from 'redux-first-router'

const routesMap = {
  HOME: '/',
  CAMPUSES: '/campuses',
  STUDENTS: '/students',
  SINGLECAMPUS: '/campuses/:id',
  SINGLESTUDENT: '/students/:id',
}

export default routesMap;
