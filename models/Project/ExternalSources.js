const mongoose = require("../../database/mongodb.js");

const ExternalSources = new mongoose.Schema({
    name: { type: String, required: true},
    link: { type: String, required: true}
});
module.exports = mongoose.model("ExternalSources", ExternalSources);