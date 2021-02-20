const routes = require("express").Router()
const auth = require("./middlewares/auth").auth
const user = require("./repositories/User/useCases")

routes.post('/user/signUp', (request, response) => { return user.createUserController.handle(request, response) })
routes.post('/user/signIn', (request, response) => { return user.loginController.handle(request, response) })
routes.get('/main', auth, (request, response) => { return user.getUserDataController.handle(request, response) })

export default routes