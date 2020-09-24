const mongoose = require("../database/mongodb.js");
// const User = require("./Consumable");

const Company = new mongoose.Schema({
    cnpj: { type: String, required: true, unique: true},
    user:  { type: mongoose.Schema.Types.ObjectId, ref: "User"},
});
module.exports = mongoose.model("Company", Company);