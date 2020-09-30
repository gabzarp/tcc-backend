const mongoose = require("../../database/mongodb");

const Member = new mongoose.Schema({
  position: { type: String, required: true },
  cpf: { type: Number, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: true },
  evaluations: [{ type:  mongoose.Schema.Types.ObjectId, ref: "Evaluation", autopopulate: true}],
});

Member.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Member", Member);
