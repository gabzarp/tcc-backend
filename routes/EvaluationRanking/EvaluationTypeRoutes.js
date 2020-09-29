const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../factories/CrudFactory')

router
.post('/evaluation-type',CrudFactory.create('EvaluationType', ctx))
.get('/evaluation-types', CrudFactory.getAll('EvaluationType', ctx)) 
.get('/evaluation-type/:id', CrudFactory.getById('EvaluationType', ctx)) 
.patch('/evaluation-type/:id', CrudFactory.update('EvaluationType', ctx))
.delete('/evaluation-type/:id', CrudFactory.delete('EvaluationType', ctx))

module.exports = router.routes()
