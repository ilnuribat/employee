const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();
const bodyparser = require('koa-bodyparser');
const Handlers = require('./handlers');

Bluebird.promisifyAll(http.Server.prototype);

const app = new Koa();

app.use(bodyparser());
app.use(async (ctx) => {
  const { action, data } = ctx.request.body;

  try {
    if (!Handlers[action]) {
      throw new Error(`no such action: ${action}`);
    }
    ctx.body = await Handlers[action](data || {});
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

async function start() {
  const key = `service 'employee' started at port ${process.env.HTTP_PORT_EMPLOYEES}`;

  console.time(key);
  const server = http.createServer(app.callback());

  await server.listen(process.env.HTTP_PORT_EMPLOYEES);
  console.timeEnd(key);
}

start();
