import API from '../../api'
import IRegisterValues from './IRegisterValues'

export default async function ValidateRegister(values: IRegisterValues ) {

  if (values.password != values.confirmPassword) return 'As senhas devem ser iguais'
  
  if (values.role === "student") {
    const data = { 
			"username": values.username, 
			"email": values.email, 
			"userpassword_init": values.password, 
			"state": values.geoState, 
			"school": values.school 
    }
    API.post('createStudent', data)
    return "OK"
  }
}