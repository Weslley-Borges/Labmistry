import API from '../api'

interface RegisterValues{
  username: string
  email: string
  password: string
  confirmPassword: string
  state: string
  role: string

  school?: string
  schools?: [string]
}

export default async function ValidateRegister(values: RegisterValues ) {

  if (values.password === values.confirmPassword) {

    if (values.role === "student") {
      const data = { 
				"username": values.username, 
				"email": values.email, 
				"userpassword_init": values.password, 
				"state": values.state, 
				"school": values.school 
			}
			await API.post('createStudent', data)
			
			alert("Usuário cadastrado com sucesso")
			return true
    }
  }
  alert("Erro:\nAs senhas devem ser iguais!")
  return false
}