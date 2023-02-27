import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const selectedNote = action.payload

      // const noteToChange = state.find((n) => n.id === selectedNote.id)
      // const changedNote = {
      //   ...noteToChange,
      //   important: !noteToChange.important,
      // }
      console.log('STATE', JSON.parse(JSON.stringify(state)))
      const statee = state.map((note) =>
        note.id !== selectedNote.id ? note : selectedNote
      )
      return statee
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

export const updateChangedNote = (note) => {
  const changeNoteImportants = {
    ...note,
    important: !note.important,
  }
  return async (dispatch) => {
    dispatch(toggleImportanceOf(changeNoteImportants))
    const newNotee = await noteService.updateNote(changeNoteImportants)
    // dispatch(toggleImportanceOf(newNotee))
  }
}

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions
export default noteSlice.reducer
