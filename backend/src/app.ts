import './configs/env'
import express from "express"
import cors from 'cors';
import routes from './routes'
import 'express-async-errors'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export { app }