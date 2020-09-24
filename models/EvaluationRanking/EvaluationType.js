const mongoose = require("../database/mongodb.js");

const EvaluationType = new mongoose.Schema({
    name: { type: String, required: true }
});
module.exports = mongoose.model("EvaluationType", EvaluationType);