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

module.exports = { CreateCompany };
