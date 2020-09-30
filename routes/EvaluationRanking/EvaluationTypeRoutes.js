const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/evaluation-type',(ctx)=> CrudFactory.create('EvaluationType', ctx))
.get('/evaluation-types', (ctx)=> CrudFactory.getAll('EvaluationType', ctx)) 
.get('/evaluation-type/:id', (ctx)=> CrudFactory.getById('EvaluationType', ctx)) 
.patch('/evaluation-type/:id', (ctx)=> CrudFactory.update('EvaluationType', ctx))
.delete('/evaluation-type/:id', (ctx)=> CrudFactory.delete('EvaluationType', ctx))

module.exports = router.routes()
