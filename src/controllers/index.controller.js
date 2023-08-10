import { pool } from "../db.js";
export const indexExample = async (req, res) => {
    const result = await pool.query("SELECT 1+1 AS Result");
    res.json(result[0]);
}