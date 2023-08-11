import { pool } from "../db.js";
export const getAutores = async (req, res) =>{
    const [result] = await pool.query("SELECT * FROM autor");
    res.json(result);
};

export const getAutorByID = async (req, res) =>{
    const [result] = await pool.query("SELECT * FROM autor WHERE id_autor = ?",[req.params.id]);
    res.json(result);
};

export const insertAutor = async (req, res) => {
  const { name, edad } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO autor(`id_autor`,`name`,`edad`) VALUES (?,?,?)",
    [name, edad]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};
export const updateAutores = (req, res) => res.send("Actualizando libros");
export const deleteAutor = (req, res) => res.send("Eliminando libros");
