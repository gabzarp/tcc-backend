const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../factories/CrudFactory')

router
.post('/external-source',CrudFactory.create('ExternalSource', ctx))
.get('/external-sources', CrudFactory.getAll('ExternalSource', ctx)) 
.get('/external-source/:id', CrudFactory.getById('ExternalSource', ctx)) 
.patch('/external-source/:id', CrudFactory.update('ExternalSource', ctx))
.delete('/external-source/:id', CrudFactory.delete('ExternalSource', ctx))

module.exports = router.routes()
