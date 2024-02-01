import { Pool } from 'pg';
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'Sjef'
});

export default pool;
