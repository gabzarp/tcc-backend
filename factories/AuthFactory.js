const Company = require("../models/User/Company");
const Member = require("../models/User/Member");

const entities = {
  Company,
  Member,
};

module.exports = {
  create: async (type, user, body) => {
    const createType = entities[type];
    let member = await createType.create({ body, user });

    return await member.populate("user").execPopulate();
  },
};
