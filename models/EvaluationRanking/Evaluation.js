const mongoose = require("../database/mongodb.js");

const Evaluation = new mongoose.Schema({
    member:  { type: mongoose.Schema.Types.ObjectId, ref: "Member"},
    type:  { type: mongoose.Schema.Types.ObjectId, ref: "EvaluationType"},
    score:  { type: Number, min: 0, max: 10}
});
module.exports = mongoose.model("Evaluation", Evaluation);