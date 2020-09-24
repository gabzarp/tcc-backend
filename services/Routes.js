const Router = require("koa-router")

const MemberController = require('../controllers/MemberController')
const router = new Router();

router
.post("/signup", MemberController.signup)
.post("/login", MemberController.login)

module.exports = router;
