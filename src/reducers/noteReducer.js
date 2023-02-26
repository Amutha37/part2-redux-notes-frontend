import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

// WITH REDUX-TOOLKIT
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // createNote(state, action) {
    //   state.push(action.payload)
    //   // const content = action.payload
    //   // state.push({
    //   //   content,
    //   //   important: false,
    //   //   id: generateId(),
    //   // })
    // },
    toggleImportanceOf(state, action) {
      return action.payload

      //   const selectedNote = action.payload

      //   const noteToChange = state.find((n) => n.id === selectedNote.id)
      //   const changedNote = {
      //     ...noteToChange,
      //     important: !noteToChange.important,
      //   }

      //   // console.log('STATE', JSON.parse(JSON.stringify(state)))
      //   return state.map((note) =>
      //     note.id !== selectedNote.id ? note : noteToChange
      //   )
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
export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

//  action creator for initializing the notes based on the data received from the server.
export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content)
    dispatch(appendNote(newNote))
  }
}

export const updatedNoteStatus = (content) => {
  // const selectedNote = content
  // const noteToChange = notes.find((n) => n.id === selectedNote.id)
  // const changedNote = {
  //   ...noteToChange,
  //   important: !noteToChange.important,
  // }

  // console.log('changeNoteImportants', changeNoteImportants)
  // console.log('STATE', JSON.parse(JSON.stringify(content)))
  return async (dispatch) => {
    const newNote = await noteService.updateNote(content)
    dispatch(toggleImportanceOf(newNote))
  }
  // return state.map((note) =>
  //   note.id !== selectedNote.id ? note : changedNote
  // )
}
// reducer
export default noteSlice.reducer
