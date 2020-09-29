const Company = require("../../models/User/Company");

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

const DeleteCompany = async (id) => {
  try {
    const company = await Company.findById(id);
    const userId = company.user;
    await Company.deleteOne({ _id: id });

    return userId;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { CreateCompany, DeleteCompany };
