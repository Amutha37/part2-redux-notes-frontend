import { useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import Footer from './components/Footer'
import Notification from './components/Notification'
// initialiazation of data
// import noteService from './services/notes'
// import { setNotes } from './reducers/noteReducer'
// relace with
import { initializeNotes } from './reducers/noteReducer'

import { useDispatch } from 'react-redux'

const App1 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div id='container'>
      <Notification />
      <NewNote />
      <VisibilityFilter />
      <Notes />
      <Footer />
    </div>
  )
}

export default App1
