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

const DeleteMember = async (id) => {
  try {
    const member = await Member.findById(id);
    const userId = member.user;
    await Member.deleteOne({ _id: id });

    return userId;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { CreateMember, DeleteMember };
