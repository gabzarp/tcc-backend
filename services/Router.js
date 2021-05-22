const compose = require('koa-compose');

const Evaluation = require('../routes/EvaluationRanking/EvaluationRoutes')
const EvaluationType = require('../routes/EvaluationRanking/EvaluationTypeRoutes')
const DeadLine = require('../routes/Project/DeadLineRoutes')
const Risks = require('../routes/Project/RisksRoutes')
const Expenses = require('../routes/Project/ExpensesRoutes')
const ExternalSources = require('../routes/Project/ExternalSourcesRoutes')
const Project = require('../routes/Project/ProjectRoutes')
const User = require('../routes/User/UserRoutes')
const Member = require('../routes/User/MemberRoutes')

module.exports = compose([Evaluation, EvaluationType, DeadLine, Expenses, Risks, ExternalSources, Project, User, Member])
