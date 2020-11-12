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
        externalSources: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExternalSources',
                autopopulate: { maxDepth: 2 },
            },
        ],
        documents: [{ type: String }],
        description: String,
        taken: {
            type: Boolean,
            default: false
        },
        isFinished: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)
Project.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Project', Project)
