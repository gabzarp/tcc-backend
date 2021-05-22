const mongoose = require("../../database/mongodb.js");

const Risks = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    project: {type: mongoose.Schema.Types.ObjectId, ref:"Project", required:true}
});

module.exports = mongoose.model("Risks", Risks);