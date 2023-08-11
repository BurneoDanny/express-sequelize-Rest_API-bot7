import { createPool } from "mysql2/promise"; // modulo de node js que me permite conectarme a la base de datos mysql

export const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'autor_novela'

})

