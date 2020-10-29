const mongoose = require("../../database/mongodb")
const Deadline = require("../../models/Project/DeadLine");


const getProjectDeadlines = async (ctx) => {
  const projectId = ctx.request.params.id
  const deadlines = await Deadline.find({project: projectId });
  ctx.body = deadlines;
}

module.exports ={getProjectDeadlines};