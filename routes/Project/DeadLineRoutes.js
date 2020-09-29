const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../factories/CrudFactory')

module.exports = router
.post('/dead-line',CrudFactory.create('DeadLine', ctx))
.get('/dead-lines', CrudFactory.getAll('DeadLine', ctx)) 
.get('/dead-line/:id', CrudFactory.getById('DeadLine', ctx)) 
.patch('/dead-line/:id', CrudFactory.update('DeadLine', ctx))
.delete('/dead-line/:id', CrudFactory.delete('DeadLine', ctx))