const mongoose = require("../database/mongodb.js");

const Project = new mongoose.Schema({
    name: { type: String, required: true},
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member"}],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Company"},
    externalSources: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExternalSources"}],
    documents: [{ type: String}],
    deadLines: [{ type: mongoose.Schema.Types.ObjectId, ref: "DeadLine"}],
},
{
    timestamps: true
});


module.exports = mongoose.model("Project", Project);