import express from "express";
import autorRoutes from "./routes/autor.routes.js"
import indexRoutes from "./routes/index.routes.js"

const app = express(); // inicializa el servidor express y permite usar instrucciones http

app.use(indexRoutes)
app.use(autorRoutes)



app.listen(3000);
console.log("Server running on port 3000");
