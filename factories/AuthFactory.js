const User = require("../models/User/User");
const Company = require("../models/User/Company");
const Member = require("../models/User/Member");

const entities = {
  User,
  Company,
  Member,
};

module.exports = {
  create: async (user, body, type) => {
    const createType = entities[type];
    let member = await createType.create({ body, user });

    return await member.populate("user").execPopulate();
  },
};
