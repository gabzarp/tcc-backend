const mongoose = require("../../database/mongodb.js");

const Expenses = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    cost: { type: String, required: true},
    project: {type: mongoose.Schema.Types.ObjectId, ref:"Project", required:true},
    date: { type: Date }
});

module.exports = mongoose.model("Expenses", Expenses);