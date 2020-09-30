const compose = require('koa-compose');

const Evaluation = require('../routes/EvaluationRanking/EvaluationRoutes')
const EvaluationType = require('../routes/EvaluationRanking/EvaluationTypeRoutes')
const DeadLine = require('../routes/Project/DeadLineRoutes')
const ExternalSources = require('../routes/Project/ExternalSourcesRoutes')
const Project = require('../routes/Project/ProjectRoutes')
const User = require('../routes/User/UserRoutes')

module.exports = compose([Evaluation, EvaluationType, DeadLine, ExternalSources, Project, User])
