<<<<<<< HEAD
import axios from 'axios'

const baseUrl = 'http://localhost:3002/notes'

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
=======
import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
  // return request.then(response => response.data)
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};
// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this
export default { getAll, create, update };
>>>>>>> 6f2290c (fetch data from backend node express)
