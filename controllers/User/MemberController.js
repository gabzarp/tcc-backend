const Member = require("../../models/User/Member");

const CreateMember = async (userId, body) => {
  try {
    const { cpf, position } = body;
    let member = await Member.create({
      cpf,
      position,
      user: userId,
    });

    member = await member.populate("user").execPopulate();
    return member;
  } catch (error) {
    throw error;
  }
};

module.exports = { CreateMember };
