import API from '../../api'
import RegisterValuesDTO from './registerValuesDTO'

export default async function ValidateRegister(values: RegisterValuesDTO ) {
  
  const data = { 
		"username": values.username, 
		"email": values.email, 
		"userpassword_init": values.password, 
		"state": values.geoState, 
		"school": values.school 
  }

  let result = (await API.post('createStudent', data)).data
  return result
  
}