const config = require('../knexfile');
const knex = require('knex')(config[process.env.NODE_ENV]);

async function ADD_EMPLOYEE(data) {
  return knex('Employee').insert(data).returning('*');
}

module.exports = {
  ADD_EMPLOYEE,
};
