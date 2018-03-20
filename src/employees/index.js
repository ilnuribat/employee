const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();

const serviceName = 'EMPLOYEES';

Bluebird.promisifyAll(http.Server.prototype);

const app = new Koa();

app.use((ctx) => {
  ctx.body = {
    service: 'employees',
    result: 'ok',
  };
});

async function start() {
  const server = http.createServer(app.callback());

  await server.listen(process.env[`HTTP_PORT_${serviceName}`]);
  console.log(`service ${serviceName} started at port ${process.env[`HTTP_PORT_${serviceName}`]}`);
}

start();
