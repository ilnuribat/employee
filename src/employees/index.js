const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();

Bluebird.promisifyAll(http.Server.prototype);

const app = new Koa();

app.use((ctx) => {
  ctx.body = {
    service: 'employees',
    result: 'ok',
  };
});

async function start() {
  const key = `service 'employee' started at port ${process.env.HTTP_PORT_EMPLOYEES}`;

  console.time(key);
  const server = http.createServer(app.callback());

  await server.listen(process.env.HTTP_PORT_EMPLOYEES);
  console.timeEnd(key);
}

start();
