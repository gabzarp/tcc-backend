const mongoose = require('../../database/mongodb.js')

const Project = new mongoose.Schema(
    {
        name: { type: String, required: true },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Member',
                autopopulate: { maxDepth: 2 }
            },
        ],
        invites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Member',
                autopopulate: { maxDepth: 2 }
            },
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: { maxDepth: 2 },
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
            autopopulate: { maxDepth: 1 },
        },
        externalSources: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExternalSources',
                autopopulate: { maxDepth: 2 },
            },
        ],
        documents: [{ type: String }],
        risks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Risks',
                autopopulate: { maxDepth: 2 },
            },
        ],
        expenses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Expenses',
                autopopulate: { maxDepth: 2 },
            },
        ],
        documents: [{ type: String }],
        description: String,
        scope: String,
        justification: String,
        objectives: String,
        goal: String,
        taken: {
            type: Boolean,
            default: false
        },
        isFinished: {
            type: Boolean,
            default: false
        },
        dueDate: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
)
Project.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Project', Project)
