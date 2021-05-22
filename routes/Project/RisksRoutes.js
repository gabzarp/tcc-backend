const Router = require("koa-router")

const router = new Router();

const RisksController = require("../../controllers/Project/RisksController");

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/risks',(ctx)=> CrudFactory.create('Risks', ctx))
.get('/risks/:id', (ctx)=> RisksController.getProjectRisks(ctx)) 
.get('/risks/:id', (ctx)=> CrudFactory.getById('Risks', ctx)) 
.patch('/risks', (ctx)=> CrudFactory.update('Risks', ctx))
.delete('/risks/:id', (ctx)=> CrudFactory.delete('Risks', ctx))

module.exports = router.routes();
