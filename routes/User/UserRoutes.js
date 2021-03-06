const Router = require("koa-router")

const UserController = require('../../controllers/User/UserController')
const CompanyController = require('../../controllers/User/CompanyController')

const CrudFactory = require('../../factories/CrudFactory')

const router = new Router();

router
.patch('/user', (ctx)=> CrudFactory.update('User', ctx))
.get('/user/:id', (ctx)=> CrudFactory.getById('User', ctx)) 
.post("/signup", UserController.signup)
.post("/add-project", CompanyController.addProject)
.post("/login", UserController.login)

module.exports = router.routes()
