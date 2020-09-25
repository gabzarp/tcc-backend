const mongoose = require("../../database/mongodb.js");

const DeadLine = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    deadLine: {type: Date, required: true}
});
module.exports = mongoose.model("DeadLine", DeadLine);