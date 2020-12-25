import API from '../api'

interface LoginValues{
  email: string
  password: string
}

export default async function ValidateLogin(values: LoginValues ) {

  return console.log(values)
}