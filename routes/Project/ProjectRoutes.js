const Router = require("koa-router");

const router = new Router();

const CrudFactory = require("../../factories/CrudFactory");

router
  .post("/project", (ctx)=> CrudFactory.create("Project", ctx))
  .get("/projects", (ctx)=> CrudFactory.getAll("Project", ctx))
  .get("/project/:id", (ctx)=> CrudFactory.getById("Project", ctx))
  .patch("/project", (ctx)=> CrudFactory.update("Project", ctx))
  .delete("/project/:id", (ctx)=> CrudFactory.delete("Project", ctx));

module.exports = router.routes();
