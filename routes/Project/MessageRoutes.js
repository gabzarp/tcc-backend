const Router = require("koa-router")

const router = new Router();

const MessageController = require('../../controllers/Project/MessageController')

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/message',(ctx)=> CrudFactory.create('Message', ctx))
.get('/message/:id', (ctx)=> CrudFactory.getById('Message', ctx)) 
.get('/messages-by-chat/:id', (ctx)=> MessageController.getMessageByChat(ctx)) 
.patch('/message', (ctx)=> CrudFactory.update('Message', ctx))
.delete('/message/:id', (ctx)=> CrudFactory.delete('Message', ctx))

module.exports = router.routes();
