const _ = require('lodash');
const config = require('../knexfile');
const knex = require('knex')(config[process.env.NODE_ENV]);

async function ADD_EMPLOYEE(data) {
  return knex('Employee').insert(data).returning('*');
}

async function EDIT_EMPLOYEE(data) {
  return knex('Employee').update(data).where({ id: data.id }).returning('*');
}

async function GET_EMPLOYEE(data) {
  const params = _.pick(data, ['id', 'email', 'name', 'phone', 'description']);
  const query = knex('Employee').select('*');

  if (!_.isEmpty(params)) {
    query.where(params);
  }

  return query;
}

module.exports = {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  GET_EMPLOYEE,

};
