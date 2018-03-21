// Update with your config settings.
const path = require('path');
require('dotenv').config({ path: '../../.env' });

const config = {
  client: 'postgresql',
  connection: {
    host: 'postgres',
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve('migrations'),
  },
};

module.exports = {
  development: config,
  production: config,
};
