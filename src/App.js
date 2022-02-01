import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'
import loginService from './services/login'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)
  const [errTextColour, setErrTextColour] = useState(true)

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])
  // Handle the first loading page with user loged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = async (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setErrTextColour(false)
    try {
      const saveNotes = await noteService.create(noteObject)
      // .then((returnedNote) => {
      // setNotes(notes.concat(noteObject))
      setNotes([...notes, saveNotes])
      setNewNote('')
      setErrorMessage(`Note '${noteObject.content}' succesfully saved.`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      // })
    } catch (error) {
      console.log(error.response.data)
      setErrTextColour(true)
      setErrorMessage(error.response.data)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  // show list of important and all
  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  // toggle button
  const toggleImportanceOf = (id) => {
    //  defines the unique url for each note resource based on its id.

    //  find method  find the note to modify,then assign to note.
    // Create new object exact copy of old accept the important property.

    // new note is then sent with a PUT request to the backend where it will replace the old object. put(url, changedNote)
    // callback function sets the state and render component notes with new array , except for the old note with is replaced with teh note exact item.

    const note = notes.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        // alert(
        //   `the note '${note.content}' was already deleted from server`
        // )
        setNotes(notes.filter((n) => n.id !== id))
      })
  }
  // === login handler ===
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      setUser(user)
      console.log('logging in with', username, password)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong user name or password!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // === login form ===

  const loginForm = () => (
    <div className='login_form_container'>
      <form className='login_form' onSubmit={handleLogin}>
        <div>
          username
          <input
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )

  const noteForm = () => (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type='submit'>save</button>
    </form>
  )

  //  === signoff ===
  const signOff = () => {
    window.localStorage.clear()
    return setUser(null)
    // return loginForm()
  }

  return (
    <div className='main_container'>
      <h1>Notes</h1>
      <Notification message={errorMessage} textColor={errTextColour} />
      {/* == conditional form */}
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>{' '}
          <button type='button' onClick={signOff}>
            {' '}
            Log Out
          </button>
          {noteForm()}
        </div>
      )}

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default App
