const User = require("../../models/User/User");
const Member = require("../../models/User/Member");
const Company = require("../../models/User/Company");
const { CreateMember } = require("../../controllers/User/MemberController");
const { CreateCompany } = require("../../controllers/User/CompanyController");

const userType = {
  member: CreateMember,
  company: CreateCompany,
};
const userTypeModel = {
  member: Member,
  company: Company,
};
const UserController = {
  signup: async (ctx) => {
    try {
      const body = ctx.request.body;
      const user = await User.create({
        name: body.name,
        email: body.email,
        password: body.password,
        user_type: body.user_type
      });
      
      const typedUser = await userType[body.user_type](user._id, body);

      ctx.body = typedUser;
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
      if (auth) {
        user = await userTypeModel[user.user_type].findOne({user: user._id})
      }
      console.log(user)
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
