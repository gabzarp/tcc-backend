const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')
const UploadFactory = require('../../factories/UploadFactory')
const MemberController = require('../../controllers/User/MemberController')

router
.post('/add-evaluation', MemberController.addEvaluation)
.post('/member',(ctx)=> CrudFactory.create('Member', ctx))
.post('/member-file', UploadFactory.single('curriculum'), MemberController.UpdateFile)
.get('/member-file/:id', MemberController.SendFile)
.get('/members', (ctx)=> CrudFactory.getAll('Member', ctx)) 
.get('/member/:id', (ctx)=> CrudFactory.getById('Member', ctx)) 
.patch('/member', UploadFactory.single('curriculum'), (ctx)=> CrudFactory.update('Member', ctx))
.delete('/member/:id',(ctx)=>  CrudFactory.delete('Member', ctx))

module.exports = router.routes()
