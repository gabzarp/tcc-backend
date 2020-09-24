const logger = require('koa-logger');
const Koa = require("koa")
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./services/Routes');


const mongo = require('koa-mongo')

const app = new Koa();

app.use(cors());

app.use(bodyParser());

app.use(logger());

app.use(router.routes())
app.listen(3001);
