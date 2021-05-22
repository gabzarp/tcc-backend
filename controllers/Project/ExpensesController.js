const mongoose = require("../../database/mongodb")
const Expenses = require("../../models/Project/Expenses");


const getProjectExpenses = async (ctx) => {
  const projectId = ctx.request.params.id
  const expenses = await Expenses.find({project: projectId });
  ctx.body = expenses;
}

module.exports ={getProjectExpenses};