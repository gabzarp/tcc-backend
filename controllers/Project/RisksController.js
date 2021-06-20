const mongoose = require("../../database/mongodb")
const Risks = require("../../models/Project/Risks");


const getProjectRisks = async (ctx) => {
  const projectId = ctx.request.params.id
  const risks = await Risks.find({project: projectId });
  ctx.body = risks;
}

module.exports ={getProjectRisks};