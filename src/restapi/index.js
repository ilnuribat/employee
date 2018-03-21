const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();

Bluebird.promisifyAll(http.Server.prototype);


const app = new Koa();

async function start() {
  const key = `service 'restapi' started at port ${process.env.HTTP_PORT_RESTAPI}`;

  console.time(key);
  const server = http.createServer(app.callback());

  await server.listen(process.env.HTTP_PORT_RESTAPI);
  console.timeEnd(key);
}

start();
