import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  // console.log('response', response)
  return response.data
}
const createNew = async (content) => {
  const object = { content, important: false }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateNote = (note) => {
  const respond = axios.put(`${baseUrl}/${note.id}`, note)

  return respond
}

export default { getAll, createNew, updateNote }
