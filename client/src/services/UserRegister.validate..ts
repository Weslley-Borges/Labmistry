import API from './api'

interface RegisterValuesDTO {
  username: string
  email: string
  password: string
  confirmPassword: string
  state: string
  school: string
}

export default async function validateRegister(values: RegisterValuesDTO ): Promise<string> {

	let result
	if (values.password === values.confirmPassword) {
		if (!values.password.includes(" ")) {
			if (values.password.length >= 4) {
				const data = { 
					"username": values.username.trim(), 
					"email": values.email.trim(), 
					"userpassword_request": values.password.trim(), 
					"state": values.state.trim(), 
					"school": values.school.trim() 
				}
				result = (await API.post('user/signUp', data)).data

			} else result = "A senha precisa ter mais de 3 caracteres"
		} else result = "A senha não pode ter espaços"
	} else result = "As senhas precisam ser iguais"
	return result
}