import { Router } from "express";
import { deleteAutor, getAutorByID, getAutores, insertAutor, updateAutores } from "../controllers/autor.controller.js";

const router = Router(); // sirve para agrupar varias solicitudes de express HTTP, tienen los mismos metodos de express en el archivo index. Es para manetener las solicitudes mas ordenadas.


router.get("/autores", getAutores);
router.get("/autores/:id_autor", getAutorByID);

router.post("/autores", insertAutor);

router.put("/autores/:id_autor", updateAutores );

router.patch("/autores/:id_autor", updateAutores );

router.delete("/autores/:id_autor", deleteAutor  );


export default router