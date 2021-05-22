const mongoose = require("../../database/mongodb")
const Expenses = require("../../models/Project/Expenses");


const getProjectRisks = async (ctx) => {
  const projectId = ctx.request.params.id
  const expenses = await Expenses.find({project: projectId });
  ctx.body = expenses;
}

module.exports ={getProjectRisks};