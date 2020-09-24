const mongoose = require("../database/mongodb.js");
const Member = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});
module.exports = mongoose.model("Member", Member);