const mongoose = require("../../database/mongodb.js");

const Message = new mongoose.Schema({
    message: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true, autopopulate: { maxDepth: 1 }},
    date: { type: Date, required:true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref:"Chat", required:true}
});

Message.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("Message", Message);