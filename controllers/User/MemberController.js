const Member = require("../../models/User/Member");

const MemberController = {
  addEvaluation: async (ctx) => {
    try {
      console.log(ctx.request.body)
      const member = await Member.updateOne({_id: ctx.request.body.memberId },{ $push:{evaluations: ctx.request.body.evaluationId} });

      ctx.body = member;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  CreateMember: async (userId, body) => {
    try {
      const { cpf, position } = body;

      let member = await Member.create({
        position: position,
        cpf: cpf,
        user: userId
      });

      member = await member.populate("user").execPopulate();
      return member;
    } catch (error) {
      throw error;
    }
  }
};
module.exports = MemberController;
