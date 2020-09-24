const mongoose = require("../database/mongodb.js");
// const User = require("./Consumable");

const Member = new mongoose.Schema({
    position: { type: String, required: true },
    cpf: { type: String, required: true, unique: true},
    user:  { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    // evaluations
});
module.exports = mongoose.model("Member", Member);