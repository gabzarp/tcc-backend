const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/evaluation',CrudFactory.create('Evaluation', ctx))
.get('/evaluations', CrudFactory.getAll('Evaluation', ctx)) 
.get('/evaluation/:id', CrudFactory.getById('Evaluation', ctx)) 
.patch('/evaluation/:id', CrudFactory.update('Evaluation', ctx))
.delete('/evaluation/:id', CrudFactory.delete('Evaluation', ctx))

module.exports = router.routes()
