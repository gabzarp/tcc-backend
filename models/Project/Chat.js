const mongoose = require("../../database/mongodb.js");

const Chat = new mongoose.Schema({
    messages:[ 
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        autopopulate: { maxDepth: 1 }
    }],
    project: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            autopopulate: { maxDepth: 1 }
        }
});

module.exports = mongoose.model("Chat", Chat);