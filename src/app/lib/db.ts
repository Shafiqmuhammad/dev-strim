// import { Pool } from 'pg';

// const pool = new Pool({
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     host: process.env.PGHOST,
//     //   port: process.env.PGPORT,
//     database: process.env.PGDATABASE,
//     ssl: true,
// });
// // const pool = new Pool({
// //     connectionString: process.env.DATABASE_URL
// // });

// export default pool

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    host: process.env.PGHOST as string,
    database: process.env.PGDATABASE as string,
    ssl: true,
});

export default pool;
