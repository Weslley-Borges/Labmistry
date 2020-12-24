import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Início do backend e conexão
*/

interface ValidationErrors {
  [key: string]: string[]
}

/*
  Em caso de erro (que pode ser constatado no arquivo server.ts), a aplicação
  irá retornar o erro para o log, e irá retornar um status do erro para o usuários,
  junto com a mensagem
*/
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {

  console.error(`Houve um erro na aplicação:\n${error}`)

  if (error instanceof ValidationError) {
    let errors: ValidationErrors =  {}

    error.inner.forEach( err => {
      errors[String(err.path)] = err.errors
    })
    return response.status(400).json({message: 'Validation Fails', errors})
  }

  return response.status(500).json({message:"Internal Server Error\n"})
}

export default errorHandler