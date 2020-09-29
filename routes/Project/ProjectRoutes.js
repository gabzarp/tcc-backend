const Router = require("koa-router");

const router = new Router();

const CrudFactory = require("../factories/CrudFactory");

router
  .post("/project", CrudFactory.create("Project", ctx))
  .get("/projects", CrudFactory.getAll("Project", ctx))
  .get("/project/:id", CrudFactory.getById("Project", ctx))
  .patch("/project/:id", CrudFactory.update("Project", ctx))
  .delete("/project/:id", CrudFactory.delete("Project", ctx));

module.exports = router.routes();
