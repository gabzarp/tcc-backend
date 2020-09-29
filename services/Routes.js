const Router = require("koa-router");

const UserController = require("../controllers/User/UserController");
const User = require("../models/User/User");
const router = new Router();

router
  .post("/signup", UserController.signup)
  .post("/login", UserController.login)
  .delete("/delete/:id", UserController.delete);

module.exports = router;
