const Evaluation = require("../models/EvaluationRanking/Evaluation");
const EvaluationType = require("../models/EvaluationRanking/EvaluationType");
const DeadLine = require("../models/Project/DeadLine");
const ExternalSources = require("../models/Project/ExternalSources");
const Project = require("../models/Project/Project");
const Member = require("../models/User/Member");
const User = require("../models/User/User");

const entities = {
  Evaluation,
  EvaluationType,
  DeadLine,
  ExternalSources,
  Project,
  Member,
  User
};

module.exports = {
  async create(type, ctx) {
    let createType = entities[type];
    ctx.body = await createType.create(ctx.request.body);
  },
  async update(type, ctx) {
    let createType = entities[type];
    if(typeof ctx.request.body._id === 'undefined' ){
      ctx.body = await createType.create(ctx.request.body);
    }
    else{
      await createType.updateOne(
        { _id: ctx.request.body._id },
        { $set: ctx.request.body }
        );
      ctx.body = ctx.request.body
    }
    console.log(ctx.body)
  },
  async delete(type, ctx) {
    let createType = entities[type];
    ctx.body = await createType.deleteOne({ _id: ctx.request.params.id });
  },
  async getAll(type, ctx) {
    let createType = entities[type];
    ctx.body = await createType.find();
  },
  async getById(type, ctx) {
    let createType = entities[type];
    ctx.body = await createType.findOne({ _id: ctx.request.params.id });
  },
};
