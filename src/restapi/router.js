const Router = require('koa-router');
const { days, employees } = require('./services');

const router = new Router({ prefix: '/api' });

router
  .get('/employees', async (ctx) => {
    ctx.body = await employees.get();
  })
  .get('/days', async (ctx) => {
    ctx.body = await days.get();
  });

module.exports = router;
