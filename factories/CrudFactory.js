const Evaluation = require('../models/EvaluationRanking/Evaluation')
const EvaluationType = require('../models/EvaluationRanking/EvaluationType')
const DeadLine = require('../models/Project/DeadLine')
const ExternalSources = require('../models/Project/ExternalSources')
const Project = require('../models/Project/Project')

const entities = {Evaluation, EvaluationType, DeadLine, ExternalSources, Project}
 
module.exports = {
    create(type, ctx){
        let createType = entities[type];
        return await createType.create(ctx.request.body);
    },
    update(type, ctx){
        let createType = entities[type];
        return await createType.updateOne({_id: ctx.request.params.id}, { $set: ctx.request.body });
    },
    delete(type, ctx){
        let createType = entities[type];
        return await createType.deleteOne({_id: ctx.request.params.id});
    },
    getAll(type, ctx){
        let createType = entities[type];
        return await createType.find();
    },
    getById(type,ctx){
        let createType = entities[type];
        return await createType.findOne({_id: ctx.request.params.id});
    }
}