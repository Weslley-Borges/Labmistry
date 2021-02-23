import User from "../Model"

export default {
  render(user: User) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      state: user.state,
      school: user.school,
      bottles: user.bottles,
      session_token: user.session_token
    }
  },
  showAlready(user: User) {
    return { email: user.email }
  },

  renderMany(users: User[]) {
    return users.map( user => this.render(user))
  }
}