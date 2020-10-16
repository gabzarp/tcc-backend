const Router = require("koa-router");

const router = new Router();

const CrudFactory = require("../../factories/CrudFactory");
const {projectStart} = require("../../controllers/Project/ProjectController");

router
  .post("/project", (ctx)=> CrudFactory.create("Project", ctx))
  .post("/project-start", (ctx)=> projectStart(ctx))
  .get("/projects", (ctx)=> CrudFactory.getAll("Project", ctx))
  .get("/project/:id", (ctx)=> CrudFactory.getById("Project", ctx))
  .patch("/project/:id", (ctx)=> CrudFactory.update("Project", ctx))
  .delete("/project/:id", (ctx)=> CrudFactory.delete("Project", ctx));

module.exports = router.routes();
