import axios from 'axios'

const baseUrl = 'http://localhost:3002/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response)
  return response.data
}
const createNew = async (content) => {
  const object = { content, important: false }
  const response = await axios.post(baseUrl, object)
  return response.data
}

// export const updateNote = (updatedNote) =>
//   axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote).then((res) => res.data)

const updateNote = (note) => {
  // const changeNoteImportants = {
  //   ...note,
  //   important: !note.important,
  // }
  const respond = axios.put(`${baseUrl}/${note.id}`, note)

  return respond
}

export default { getAll, createNew, updateNote }
