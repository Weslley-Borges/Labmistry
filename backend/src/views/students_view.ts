import Student from "../entity/models/Students"

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