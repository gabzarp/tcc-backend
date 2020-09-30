const mongoose = require("../../database/mongodb");

const Company = new mongoose.Schema({
  cnpj: { type: Number, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: true },
});
Company.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Company", Company);
