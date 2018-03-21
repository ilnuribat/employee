exports.up = async function (knex) {
  await knex.raw('create extension "uuid-ossp"');
};

exports.down = async function (knex) {
  await knex.raw('drop extension "uuid-ossp"');
};
