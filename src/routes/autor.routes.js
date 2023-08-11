import { Router } from "express";
import { deleteAutor, getAutorByID, getAutores, insertAutor, updateAutores } from "../controllers/autor.controller.js";

const router = Router(); // sirve para agrupar varias solicitudes de express HTTP, tienen los mismos metodos de express en el archivo index. Es para manetener las solicitudes mas ordenadas.


router.get("/autores", getAutores);
router.get("/autores/:id", getAutorByID);

router.post("/autores", insertAutor);

router.put("/autores", updateAutores );

router.delete("/autores", deleteAutor  );


export default router