
exports.up = async function (knex) {
  await knex.schema.createTable('Employee', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('email').unique().notNull();
    table.string('name');
    table.string('phone');
    table.string('description');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('Employee');
};
