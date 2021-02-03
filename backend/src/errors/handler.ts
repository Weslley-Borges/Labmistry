import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}


const errorHandler: ErrorRequestHandler = (error: Error, request, response, next) => {

  if (error instanceof ValidationError) {
    let errors: ValidationErrors =  {}

    error.inner.forEach( err => {
      errors[String(err.path)] = err.errors
    })

    return response.status(400).json({message: 'Validation Fails', errors})
  }
  // Para mostrar o erro no terminal
  console.error(`Houve um erro na aplicação:\nNome do Erro: ${error.name}\nMensagem de Erro: ${error.name}\nStack do Erro: ${error.stack}`)
  
  // Mostrar o erro pro usuário
  return response.status(500).json({message:"Internal Server Error\n"})
}

export default errorHandler