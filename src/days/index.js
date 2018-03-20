const http = require('http');
const Koa = require('koa');
const Bluebird = require('bluebird');
require('dotenv').config();

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
  await server.listen(process.env.HTTP_PORT_DAYS);
  console.log(`days' service started at port ${process.env.HTTP_PORT_DAYS}`);
}

start();
