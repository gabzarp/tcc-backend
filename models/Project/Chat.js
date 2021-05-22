const mongoose = require("../../database/mongodb.js");

const Chat = new mongoose.Schema({
    name: { type: String, required: true},
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            autopopulate: { maxDepth: 2 }
        },
    ]
});

module.exports = mongoose.model("Chat", Chat);