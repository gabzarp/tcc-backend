const mongoose = require("../../database/mongodb");

const Member = new mongoose.Schema({
  position: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", autopopulate: { maxDepth: 2 } },
  evaluations: [{ type:  mongoose.Schema.Types.ObjectId, ref: "Evaluation", autopopulate: true}],
  curriculumPath: String
});

Member.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Member", Member);
