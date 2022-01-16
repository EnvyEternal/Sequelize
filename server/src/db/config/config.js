require('dotenv/config');

module.exports = {
  development: {
    username: 'postgres',
    password: '7007',
    database: 'testdb',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {},
  production: {},
};
