const mongoose = require("../../database/mongodb");

const Company = new mongoose.Schema({
  cnpj: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: { maxDepth: 2 } },
});
Company.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Company", Company);
