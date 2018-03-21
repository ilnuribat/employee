const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();
const bodyparser = require('koa-bodyparser');
const { connect } = require('./model');
const Handlers = require('./handlers');

Bluebird.promisifyAll(http.Server.prototype);

const app = new Koa();
const server = http.createServer(app.callback());

app.use(bodyparser());

app.use(async (ctx) => {
  const { action, data } = ctx.request.body;

  try {
    ctx.body = await Handlers[action](data);
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

async function start() {
  const key = `service 'days' started at port ${process.env.HTTP_PORT_DAYS}`;

  console.time(key);
  await connect();
  await server.listen(process.env.HTTP_PORT_DAYS);
  console.timeEnd(key);
}

start();
