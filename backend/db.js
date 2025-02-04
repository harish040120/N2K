// filepath: /backend/db.js

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'delivery_service',
  password: process.env.DB_PASSWORD || '1214',
  port: process.env.DB_PORT || 5432, // default PostgreSQL port
});

export default pool;