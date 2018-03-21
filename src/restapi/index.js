const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();
const bodyparser = require('koa-bodyparser');
const router = require('./router');

Bluebird.promisifyAll(http.Server.prototype);


const app = new Koa();

app.use(bodyparser());
app.use(router.routes());

async function start() {
  const key = `service 'restapi' started at port ${process.env.HTTP_PORT_RESTAPI}`;

  console.time(key);
  const server = http.createServer(app.callback());

  await server.listen(process.env.HTTP_PORT_RESTAPI);
  console.timeEnd(key);
}

start();
