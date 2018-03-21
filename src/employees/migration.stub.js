exports.up = async function (knex) {
  await knex.raw('select 1 + 1');
};

exports.down = async function (knex) {
  await knex.raw('select 1 + 1');
};
