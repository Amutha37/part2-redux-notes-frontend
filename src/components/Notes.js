import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Notes = () => {
  const dispatch = useDispatch()
  //   const notes = useSelector((state) => state.notes)

  // ? Using fillter (radio button)

  const notes = useSelector((state) => {
    console.log('state', state)
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state.filter === 'IMPORTANT'
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important)
  })

  const handleStatus = (note) => {
    console.log(note)
    dispatch(toggleImportanceOf(note))
    dispatch(
      setNotification(
        `You change the status of the note  : '${note.content}'`,
        5
      )
    )
  }

  return (
    <ol>
      {notes.map((note, index) => (
        <li id='list' key={index}>
          {note.content}
          <strong> {note.important ? 'IMPORTANT' : 'NOT IMPORTANT'}</strong> {}
          <button onClick={() => handleStatus(note)}> status</button>
        </li>
      ))}
    </ol>
  )
}

export default Notes
