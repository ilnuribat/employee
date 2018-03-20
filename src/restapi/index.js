const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

const app = new Koa();

// lots of middlewares
app.use(bodyparser());

// Как будут общаться сервисы?
