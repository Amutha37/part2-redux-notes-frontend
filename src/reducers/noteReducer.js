import { createSlice } from '@reduxjs/toolkit'

// WITH REDUX-TOOLKIT
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        important: false,
        id: generateId(),
      })
    },
    toggleImportanceOf(state, action) {
      const selectedNote = action.payload
      const noteToChange = state.find((n) => n.id === selectedNote.id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      console.log('STATE', JSON.parse(JSON.stringify(state)))
      return state.map((note) =>
        note.id !== selectedNote.id ? note : changedNote
      )
    },
    // Add note object to the backend db
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    },
  },
})

// with redux tollkit
// individual action
export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions
// reducer
export default noteSlice.reducer
