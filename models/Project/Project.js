const mongoose = require('../../database/mongodb.js')

const Project = new mongoose.Schema(
    {
        name: { type: String, required: true },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Member',
                autopopulate: true,
            },
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            autopopulate: true,
        },
        externalSources: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExternalSources',
                autopopulate: true,
            },
        ],
        documents: [{ type: String }],
        description: String,
    },
    {
        timestamps: true,
    }
)
Project.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Project', Project)
