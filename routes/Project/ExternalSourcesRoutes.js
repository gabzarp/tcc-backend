const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/external-source',(ctx)=> CrudFactory.create('ExternalSource', ctx))
.get('/external-sources', (ctx)=> CrudFactory.getAll('ExternalSource', ctx)) 
.get('/external-source/:id', (ctx)=> CrudFactory.getById('ExternalSource', ctx)) 
.patch('/external-source', (ctx)=> CrudFactory.update('ExternalSource', ctx))
.delete('/external-source/:id', (ctx)=> CrudFactory.delete('ExternalSource', ctx))

module.exports = router.routes()
