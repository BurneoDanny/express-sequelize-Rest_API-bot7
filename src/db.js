import { createPool } from "mysql2/promise"; // modulo de node js que me permite conectarme a la base de datos mysql
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config.js";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME

})

