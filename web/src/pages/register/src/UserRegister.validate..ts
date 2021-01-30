import API from '../../../services/api'

interface RegisterValuesDTO {
  username: string
  email: string
  password: string
  confirmPassword: string
  geoState: string
  school: string
}

export default async function ValidateRegister(values: RegisterValuesDTO ) {
  
  const data = { 
		"username": values.username.trim(), 
		"email": values.email.trim(), 
		"userpassword_request": values.password.trim(), 
		"state": values.geoState.trim(), 
		"school": values.school.trim() 
  }

	let result
	if (values.password === values.confirmPassword) {
		if (!values.password.includes(" ")) {
			if (values.password.length >= 4) {
				result = (await API.post('createUser', data)).data
			} else return "A senha precisa ter mais de 3 caracteres"
		} else return "A senha não pode ter espaços"
	} else return "As senhas precisam ser iguais"
	return result
}