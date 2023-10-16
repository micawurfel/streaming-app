import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export default async function VideosApi() {
  return await api.get('/video/all')
    .then((response) => response.data)
    .catch((error) => console.log(error.message))
}
