const User = require("../../models/User/User");
const { CreateMember } = require("../../controllers/User/MemberController");
const { CreateCompany } = require("../../controllers/User/CompanyController");

const userType = {
  'member': CreateMember,
  'company': CreateCompany
}
const UserController = {
  signup: async (ctx) => {
    try {
      var user = await User.create({
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
      });

      userType[ctx.request.body.user_type]

      ctx.body = user;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  login: async (ctx) => {
    try {
      var user = await User.findOne({ email: ctx.request.body.email });
      var auth = await user.checkPassword(ctx.request.body.password);
      console.log(auth);
      ctx.body = auth ? user : auth;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
};
module.exports = UserController;
