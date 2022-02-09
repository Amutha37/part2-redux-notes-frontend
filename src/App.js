import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'

const App = () => {
  const [notes, setNotes] = useState([])
  // const [newNote, setNewNote] = useState('')
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

  const addNote = (noteObject) => {
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
    })

    setErrTextColour(false)
    setErrorMessage(`Note '${noteObject.content}' succesfully saved.`)
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
    <Togglable buttonLabel='log in'>
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  )

  const noteForm = () => (
    <Togglable buttonLabel='New note'>
      <NoteForm createNote={addNote} signOff={signOff} />
    </Togglable>
    // <form onSubmit={addNote}>
    //   <input value={newNote} onChange={handleNoteChange} />
    //   <button type='submit'>save</button>
    // </form>
  )

  //  === signoff ===
  const signOff = () => {
    window.localStorage.clear()
    return setUser(null)
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
          <p>{user.name} logged-in</p>
          {noteForm()}
          <button type='button' onClick={signOff}>
            {' '}
            Log Out
          </button>
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
