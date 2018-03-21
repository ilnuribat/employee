const Router = require('koa-router');
const { employees } = require('./services');

const router = new Router({ prefix: '/api' });

router
  .get('/employees', async (ctx) => {
    ctx.body = await employees.post({
      body: {
        action: 'GET_EMPLOYEES',
      },
    });
  });


module.exports = router;
