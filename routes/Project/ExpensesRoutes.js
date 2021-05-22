const Router = require("koa-router")

const router = new Router();

const ExpensesController = require("../../controllers/Project/ExpensesController");

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/expenses',(ctx)=> CrudFactory.create('Expenses', ctx))
.get('/expenses/:id', (ctx)=> ExpensesController.getProjectExpenses(ctx)) 
.get('/expenses/:id', (ctx)=> CrudFactory.getById('Expenses', ctx)) 
.patch('/expenses', (ctx)=> CrudFactory.update('Expenses', ctx))
.delete('/expenses/:id', (ctx)=> CrudFactory.delete('Expenses', ctx))

module.exports = router.routes();
