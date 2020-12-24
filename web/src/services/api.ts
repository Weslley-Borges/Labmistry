import axios from 'axios'

/* 
	23/12/2020 - Author: Weslley Borges dos Santos
	Conexão com a API Rest (Backend)
*/

const API = axios.create({
  baseURL: "http://localhost:3080/"
})

export default API