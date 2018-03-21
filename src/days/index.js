const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();
const { connect } = require('./model');

Bluebird.promisifyAll(http.Server.prototype);

const app = new Koa();
const server = http.createServer(app.callback());

app.use((ctx) => {
  ctx.body = {
    result: 'OK',
    key: 'value',
  };
});

async function start() {
  const key = `service 'days' started at port ${process.env.HTTP_PORT_DAYS}`;

  console.time(key);
  await connect();
  await server.listen(process.env.HTTP_PORT_DAYS);
  console.timeEnd(key);
}

start();
