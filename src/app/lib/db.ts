import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    //   port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: true,
});
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL
// });

export default pool