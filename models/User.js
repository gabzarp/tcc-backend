const mongoose = require("../database/mongodb.js");
const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});
module.exports = mongoose.model("User", User);