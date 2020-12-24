import Student from "../entities/Students"

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
  View da tabela de usuários, onde as informações
  de cada usuário podem ser transmitidas para o Frontend
*/

export default {
  render(student: Student) {
    return {
      id: student.id,
      username: student.username,
      email: student.email,
      userpassword: student.userpassword,
      state: student.state,
      school: student.school,
      bottles: student.bottles,
    }
  },

  renderMany(students: Student[]) {
    return students.map( student => this.render(student))
  }
}