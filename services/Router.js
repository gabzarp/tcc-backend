const compose = require('koa-compose');

const Evaluation = require('../Routes/EvaluationRanking/EvaluationRoutes')
const EvaluationType = require('../Routes/EvaluationRanking/EvaluationTypeRoutes')
const DeadLine = require('../Routes/Project/DeadLineRoutes')
const ExternalSources = require('../Routes/Project/ExternalSourcesRoutes')
const Project = require('../Routes/Project/ProjectRoutes')
const User = require('../Routes/User/UserRoutes')

module.exports = compose([Evaluation, EvaluationType, DeadLine, ExternalSources, Project, User])
