const mongoose = require("../../database/mongodb.js");

const DeadLine = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    deadLine: {type: Date, required: true},
    project: {type: mongoose.Schema.Types.ObjectId, ref:"Project", required:true},
    finished: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("DeadLine", DeadLine);