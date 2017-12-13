export default (state = {}, action = {}) =>
action.type === 'CAMPUSES_FETCHED'
  ? action.payload.allCampuses
  : state
