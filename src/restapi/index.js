const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();

Bluebird.promisifyAll(http.Server.prototype);


const app = new Koa();

async function start() {
  const server = http.createServer(app.callback());

  await server.listen(process.env.HTTP_PORT_RESTAPI);
  console.log(`service 'restapi' started at port ${process.env.HTTP_PORT_RESTAPI}`);
}

start();
