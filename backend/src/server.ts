import express from "express"
import cors from 'cors';
import routes from './routes'
import 'express-async-errors'

import './database/connection'
import errorHandler from './errors/handler'

/* 
	src/server.ts, 11/18/2020
	Author: Weslley Borges dos Santos
	Arquivo onde inicia o backend e sua conexão
*/

const app = express()
const port = 3080

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log("Backend iniciado com sucesso na porta:",port)
})