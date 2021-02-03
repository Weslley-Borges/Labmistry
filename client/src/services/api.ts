import axios from 'axios'

const API = axios.create({
  baseURL: "http://localhost:3080/"
})

export default API