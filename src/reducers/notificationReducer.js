import { createSlice } from '@reduxjs/toolkit'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    noteNotification(state, action) {
      state = action.payload
      return state
    },
  },
})

let timeoutId = null

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(noteNotification(message))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => dispatch(noteNotification(null)), delay * 1000)
  }
}

export const { noteNotification } = notificationReducer.actions
export default notificationReducer.reducer
