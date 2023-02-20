// REDUCER
const filterReducer = (state = 'ALL', action) => {
  // console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}
// ACTION
export const filterChange = (filter) => {
  console.log('filter: ', filter)
  return {
    type: 'SET_FILTER',
    payload: filter,
  }
}

export default filterReducer
