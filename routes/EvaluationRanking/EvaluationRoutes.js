const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/evaluation',(ctx)=> CrudFactory.create('Evaluation', ctx))
.get('/evaluations', (ctx)=> CrudFactory.getAll('Evaluation', ctx)) 
.get('/evaluation/:id', (ctx)=> CrudFactory.getById('Evaluation', ctx)) 
.patch('/evaluation/:id', (ctx)=> CrudFactory.update('Evaluation', ctx))
.delete('/evaluation/:id',(ctx)=>  CrudFactory.delete('Evaluation', ctx))

module.exports = router.routes()
