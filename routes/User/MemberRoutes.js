const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')
const MemberController = require('../../controllers/User/MemberController')

router
.post('/add-evaluation', MemberController.addEvaluation)
.post('/member',(ctx)=> CrudFactory.create('Member', ctx))
.get('/members', (ctx)=> CrudFactory.getAll('Member', ctx)) 
.get('/member/:id', (ctx)=> CrudFactory.getById('Member', ctx)) 
.patch('/member', (ctx)=> CrudFactory.update('Member', ctx))
.delete('/member/:id',(ctx)=>  CrudFactory.delete('Member', ctx))

module.exports = router.routes()
