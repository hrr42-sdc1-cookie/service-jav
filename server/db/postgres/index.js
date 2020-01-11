const { Pool } = require('pg');

const pool = new Pool({
  user: 'javed',
  host: 'localhost',
  database: 'opentable',
  port: 5432,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('Postgres connected');
  }
  catch(err) {
    console.log(err);
  }
})();

module.exports = pool;