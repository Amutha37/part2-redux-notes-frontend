import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const selectedNote = action.payload

      console.log('STATE', JSON.parse(JSON.stringify(state)))
      return state.map((note) =>
        note.id !== selectedNote.id ? note : selectedNote
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

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

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

export const updateChangedNote = (content) => {
  const changeNoteImportants = {
    ...content,
    important: !content.important,
  }
  return async (dispatch) => {
    const newNotee = await noteService.updateNote(changeNoteImportants)
    dispatch(toggleImportanceOf(newNotee))
  }
}

export default noteSlice.reducer
