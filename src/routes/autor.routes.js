import { Router } from "express";
import {getLibros, createLibros, updateLibros, deleteLibros } from "../controllers/autor.controller.js"
const router = Router(); // sirve para agrupar varias solicitudes de express HTTP, tienen los mismos metodos de express en el archivo index. Es para manetener las solicitudes mas ordenadas.


router.get("/libros", getLibros);

router.post("/libros", createLibros);

router.put("/libros", updateLibros );

router.delete("/libros", deleteLibros );


export default router