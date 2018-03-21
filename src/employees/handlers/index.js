const _ = require('lodash');
const config = require('../knexfile');
const knex = require('knex')(config[process.env.NODE_ENV]);

async function ADD_EMPLOYEE(data) {
  return knex('Employee').insert(data).returning('*');
}

async function EDIT_EMPLOYEE(data) {
  return knex('Employee').update(_.omit(data, ['id'])).returning('*');
}

module.exports = {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
};
