import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick} id='notes'>
      {note.content}
      <strong> {note.important ? 'important' : 'not important'}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  //   const notes = useSelector((state) => state.notes)

  // ? Using fillter (radio button)

  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })
  // const notes = useSelector((state) => {
  //   if (state.filter === 'ALL') {
  //     return state.notes
  //   }
  //   return state.filter === 'IMPORTANT'
  //     ? state.notes.filter((note) => note.important)
  //     : state.notes.filter((note) => !note.important)
  // })

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  )
}

export default Notes
