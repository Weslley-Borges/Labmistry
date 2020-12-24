import axios from 'axios'

/* 
	src/services/api.ts 12/23/2020
	Author: Weslley Borges dos Santos
	Conexão com a API Rest
*/

const API = axios.create({
  baseURL: "http://localhost:3080/"
})

export default API