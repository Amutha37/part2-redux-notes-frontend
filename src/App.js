import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import Footer from './components/Footer'

import Notification from './components/Notification'

const App = () => {
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

export default App
