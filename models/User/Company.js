const mongoose = require("../database/mongodb.js");

const Company = new mongoose.Schema({
    cnpj: { type: Number, required: true, unique: true},
    user:  { type: mongoose.Schema.Types.ObjectId, ref: "User"},
});
module.exports = mongoose.model("Company", Company);