import { createSlice } from '@reduxjs/toolkit'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    noteNotification(state, action) {
      state = action.payload
      return state
    },
    clearNotification(state, action) {
      state = action.payload
      return state
    },
  },
})

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(noteNotification(message))
    setTimeout(() => {
      dispatch(clearNotification(null))
    }, delay * 1000)
  }
}

export const { clearNotification, noteNotification } =
  notificationReducer.actions
export default notificationReducer.reducer
