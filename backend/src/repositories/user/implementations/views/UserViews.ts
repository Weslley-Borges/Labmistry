import Student from "../../entity"

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
  showAlready(student: Student) {
    return { email: student.email }
  },

  renderMany(students: Student[]) {
    return students.map( student => this.render(student))
  }
}