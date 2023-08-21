import { pool } from "../db.js";

// GETTERS
export const getAutores = async (req, res) => {
  pool.query("SELECT * FROM autor")
  .then(result =>{
    res.json(result)
  })
  .catch(error=> 
    res.status(500).send(error))

  /* EL SIGUIENTE CODIGO ES EQUIVALENTE AL DE ARRIBA.
    try {
    const [result] = await pool.query("SELECT * FROM autor");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  */

};

export const getAutorByID = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM autor WHERE id_autor = ?",
      [req.params.id_autor]
    );
    if (result.length <= 0)
      return res.status(404).json({ message: "Error: Autor not found" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// INSERTS
export const insertAutor = async (req, res) => {
  try {
    const { name, edad } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO autor(`id_autor`,`name`,`edad`) VALUES (?,?,?)",
      [name, edad]
    );
    res.send({
      id_autor: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// UPDATES
export const updateAutores = async (req, res) => {
  try {
    const id_autor = req.param.id_autor;
    const { name, edad } = req.body;
    const result = await pool.query(
      "UPDATE autor SET name = IFNULL(?,name),edad = IFNULL(?,edad) WHERE id_autor = ?",
      [name, edad, id_autor]
    );
    if (result.affectedRows < 1)
      return res.status(404).json({ message: "Error: Autor not found" });
    const [autor] = await pool.query("SELECT * FROM autor WHERE id_autor = ?", [
      id_autor,
    ]);
    console.log(autor);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// DELETES
export const deleteAutor = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM autor WHERE id_autor = ?", [
      req.params.id_autor,
    ]);
    if (result.affectedRows < 1)
      return res.status(404).json({ message: "Error: Autor not found" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
