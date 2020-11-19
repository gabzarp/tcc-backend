const mongoose = require("../../database/mongodb.js");

const Evaluation = new mongoose.Schema({
    member:  { type: mongoose.Schema.Types.ObjectId, ref: "Member"},
    project:  { type: mongoose.Schema.Types.ObjectId, ref: "Project"},
    type:  { type: mongoose.Schema.Types.ObjectId, ref: "EvaluationType", autopopulate: { maxDepth: 3 }},
    score:  { type: Number, min: 0, max: 5}
});

Evaluation.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Evaluation", Evaluation);