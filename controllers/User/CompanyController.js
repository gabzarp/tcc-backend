const Company = require("../../models/User/Company");
const User = require("../../models/User/User");

const CreateCompany = async (userId, body) => {
  try {
    const { cnpj } = body;
    let company = await Company.create({
      cnpj,
      user: userId,
    });

    company = await company.populate("user").execPopulate();
    return company;
  } catch (error) {
    throw error;
  }
};
const addProject = async (ctx) => {
    try {
      console.log(ctx.request.body)
      const member = await User.updateOne({_id: ctx.request.body._id },{ $push:{projects: ctx.request.body.project} });

      ctx.body = member;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
};


module.exports = { CreateCompany, addProject };
