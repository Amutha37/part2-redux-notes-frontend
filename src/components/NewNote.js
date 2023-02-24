import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
import { setNotification } from '../reducers/notificationReducer'
import noteService from '../services/notes'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    // create new not in backend server and redux
    const newNote = await noteService.createNew(content)
    dispatch(createNote(newNote))
    dispatch(setNotification(`You added new note ${content}`, 5))
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button type='submit'>add</button>
    </form>
  )
}

export default NewNote
