import API from '../api'
import RegisterValuesDTO from './DTOs/UserDTO'

export default async function ValidateRegister(values: RegisterValuesDTO ) {
  
  const data = { 
		"username": values.username, 
		"email": values.email, 
		"userpassword_request": values.password, 
		"state": values.geoState, 
		"school": values.school 
  }

	let result
	if (values.password === values.confirmPassword) {
		if (values.password.length >= 4) {
			result = (await API.post('createUser', data)).data
		} else return "A senha precisa ter mais de 3 caracteres"
	} else return "As senhas precisam ser iguais"
	return result
}