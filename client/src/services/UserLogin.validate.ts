import API from './api'

interface LoginValuesDTO {
  email: string
  password: string
}


export default async function validateLogin(values: LoginValuesDTO ) {
  
  const data = { 
		"email": values.email, 
		"userpassword": values.password, 
  }

  return (await API.post('user/signIn', data)).data
}