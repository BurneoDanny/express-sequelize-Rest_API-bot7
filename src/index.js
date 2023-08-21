import app from "./app.js";
import { PORT } from "../config.js";
app.listen(PORT);  //inicializa el servidor express 
console.log("Server running on port 3000");
