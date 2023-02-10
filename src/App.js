import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id='container'>
      <NewNote />
      <VisibilityFilter />
      <Notes />
      <Footer />
    </div>
  )
}

export default App
