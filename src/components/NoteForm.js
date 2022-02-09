import React from 'react'

const NoteForm = ({ onSubmit, handleChange, value }) => {
  return (
    <div className='newNote'>
      <h2>Create a new note</h2>

      <form onSubmit={onSubmit}>
        <input value={value} onChange={handleChange} />
        <button type='submit'>save</button>
        {/* <button type='button' onClick={signOff}>
          {' '}
          Log Out
        </button> */}
      </form>
    </div>
  )
}

export default NoteForm
