import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

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

const updateNote = (content) => {
  const changeNoteImportants = {
    ...content,
    important: !content.important,
  }
  const respond = axios.put(`${baseUrl}/${changeNoteImportants.id}`)

  return respond
}

export default { getAll, createNew, updateNote }
