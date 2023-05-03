const { Pool } = require('pg');

// Replace the values below with your own configuration.
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: '',
  port: 5432,
});

module.exports = pool;
