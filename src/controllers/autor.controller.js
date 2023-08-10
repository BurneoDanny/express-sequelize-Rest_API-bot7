import { pool } from "../db.js"
export const getLibros = (req, res) => res.send("Obteniendo libros disponibles")
export const createLibros = (req, res) =>{
    //pool.query('INSERT INTO autor(`id_autor`,`name`,`edad`) VALUES (?,?,?)',[])
}
export const updateLibros = (req, res) => res.send("Actualizando libros")
export const deleteLibros = (req, res) => res.send("Eliminando libros")