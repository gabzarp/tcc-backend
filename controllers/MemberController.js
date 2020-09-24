const Member = require("../models/Member");

const MemberController = {
  signup: async (ctx) => {
    try {
      var member = await Member.create({
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
      });
      ctx.body = member;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  login: async (ctx) => {
    try {
      var member = await Member.findOne({ email: ctx.request.body.email });
      var auth = await member.checkPassword(ctx.request.body.password);
      console.log(auth);
      ctx.body = auth ? member : auth;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
};
module.exports = MemberController;
