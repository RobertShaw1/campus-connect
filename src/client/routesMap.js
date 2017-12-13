import 'babel-polyfill'
import { redirect, NOT_FOUND } from 'redux-first-router'
import {client, allCampusesQuery} from './graphql-client'

const routesMap = {
  HOME: '/',
  CAMPUSES: {
    path: '/campuses',
    thunk: async (dispatch, getState) => {
      const campuses = await client.request(allCampusesQuery);
      const action = {type: 'CAMPUSES_FETCHED', payload: campuses}
      return dispatch(action)
    }
  },
  STUDENTS: '/students',
  SINGLECAMPUS: '/campuses/:id',
  SINGLESTUDENT: '/students/:id',
}

export default routesMap;
