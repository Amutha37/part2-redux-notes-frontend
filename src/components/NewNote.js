import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(createNote(content))
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
