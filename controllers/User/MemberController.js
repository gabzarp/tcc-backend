const Member = require("../../models/User/Member");

const fs = require('fs');

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
  },
  UpdateFile: async (ctx) => {
    try {
      const member = await Member.updateOne({_id: ctx.request.body.userId },{ $set:{curriculumPath: ctx.file.path} })
      ctx.body = member;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  SendFile: async (ctx) => {
    try {
      const member = await Member.findOne({_id: ctx.request.params.id});
      ctx.set('Content-disposition', `attachment; filename=${member.curriculumPath}`);
      let curriculumFile = fs.createReadStream(member.curriculumPath);
      ctx.body = curriculumFile;
    } catch (error) {
      console.log(error)
    }
  }
};
module.exports = MemberController;
