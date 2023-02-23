import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

// WITH REDUX-TOOLKIT
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState,
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
  },
})

// with redux tollkit
// individual action
export const { createNote, toggleImportanceOf } = noteSlice.actions
// reducer
export default noteSlice.reducer
